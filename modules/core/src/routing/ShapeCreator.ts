﻿///  Class for creating Shape elements from a Graph.

import {GeomGraph, GeomNode, GeomEdge} from '../layout/core'
import {HookUpAnywhereFromInsidePort} from '../layout/core/hookUpAnywhereFromInsidePort'
import {Port} from '../layout/core/port'
import {RelativeFloatingPort} from '../layout/core/relativeFloatingPort'
import {ClusterBoundaryPort} from './ClusterBoundaryPort'
import {RelativeShape} from './RelativeShape'
import {Shape} from './shape'

export class ShapeCreator {
  ///  For a given graph finds the obstacles for nodes and clusters, correctly parenting the obstacles
  ///  according to the cluster hierarchy

  ///  <param name="graph">graph with edges to route and nodes/clusters to route around</param>
  ///  <returns>the set of obstacles with correct cluster hierarchy and ports</returns>
  public static GetShapes(graph: GeomGraph, edges: GeomEdge[] = Array.from(graph.edges())): Array<Shape> {
    const nodesToShapes = new Map<GeomNode, Shape>()
    getShapesUnderGraph(graph, nodesToShapes)

    for (const edge of edges) {
      let shape = nodesToShapes.get(edge.source)
      if (shape) {
        if (edge.sourcePort != null) {
          shape.Ports.add(edge.sourcePort)
        }
      }
      shape = nodesToShapes.get(edge.target)
      if (shape) {
        if (edge.targetPort != null) {
          shape.Ports.add(edge.targetPort)
        }
      }
    }

    return Array.from(nodesToShapes.values())
  }

  /**   Creates a shape with a RelativeFloatingPort for the node center, attaches it to the shape and all edges */

  static CreateShapeWithCenterPort(node: GeomNode): Shape {
    //  Assert.assert(ApproximateComparer.Close(node.BoundaryCurve.BoundingBox, node.BoundingBox), "node's curve doesn't fit its bounds!");
    const shape = new RelativeShape(() => node.boundaryCurve)

    const port = RelativeFloatingPort.mk(
      () => node.boundaryCurve,
      () => node.center,
    )
    shape.Ports.add(port)
    for (const e of node.inEdges()) {
      ShapeCreator.FixPortAtTarget(port, e)
    }

    for (const e of node.outEdges()) {
      ShapeCreator.FixPortAtSource(port, e)
    }

    for (const e of node.selfEdges()) {
      ShapeCreator.FixPortAtSource(port, e)
      ShapeCreator.FixPortAtTarget(port, e)
    }

    return shape
  }

  /**   Creates a ClusterBoundaryPort for the cluster boundary, attaches it to the shape and all edges */
  static CreateShapeWithClusterBoundaryPort(subgraph: GeomGraph): Shape {
    //  Assert.assert(ApproximateComparer.Close(node.BoundaryCurve.BoundingBox, node.BoundingBox), "node's curve doesn't fit its bounds!");
    /*Assert.assert(nodeinstanceof Graph)*/
    const shape = new RelativeShape(() => subgraph.boundaryCurve)

    const port = ClusterBoundaryPort.mk(
      () => subgraph.boundaryCurve,
      () => subgraph.center,
    )
    shape.Ports.add(port)
    for (const e of subgraph.inEdges()) {
      if (e.source.node.isDescendantOf(subgraph.graph)) {
        const cluster_port = new HookUpAnywhereFromInsidePort(() => subgraph.boundaryCurve)
        shape.Ports.add(cluster_port)
        e.targetPort = cluster_port
      } else {
        ShapeCreator.FixPortAtTarget(port, e)
      }
    }

    for (const e of subgraph.outEdges()) {
      if (e.target.node.isDescendantOf(subgraph.graph)) {
        const cluster_port = new HookUpAnywhereFromInsidePort(() => subgraph.boundaryCurve)
        shape.Ports.add(cluster_port)
        e.sourcePort = cluster_port
      } else {
        ShapeCreator.FixPortAtSource(port, e)
      }
    }

    for (const e of subgraph.selfEdges()) {
      ShapeCreator.FixPortAtSource(port, e)
      ShapeCreator.FixPortAtTarget(port, e)
    }

    return shape
  }

  static FixPortAtSource(port: Port, e: GeomEdge) {
    if (e.sourcePort == null) {
      e.sourcePort = port
    }
  }

  static FixPortAtTarget(port: Port, e: GeomEdge) {
    if (e.targetPort == null) {
      e.targetPort = port
    }
  }
}
function getShapesUnderGraph(graph: GeomGraph, nodesToShapes: Map<GeomNode, Shape>) {
  for (const n of graph.shallowNodes()) {
    if (n instanceof GeomGraph) {
      const nShape = ShapeCreator.CreateShapeWithClusterBoundaryPort(<GeomGraph>n)
      nodesToShapes.set(n, nShape)
      const ng = <GeomGraph>n
      if (!ng.graph.isCollapsed) {
        getShapesUnderGraph(ng, nodesToShapes)
        for (const ch of ng.shallowNodes()) {
          nShape.AddChild(nodesToShapes.get(ch))
        }
      }
    } else {
      nodesToShapes.set(n, ShapeCreator.CreateShapeWithCenterPort(n))
    }
  }
}
