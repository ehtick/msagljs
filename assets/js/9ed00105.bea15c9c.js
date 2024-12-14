"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[873],{9916:(I,M,g)=>{g.d(M,{xA:()=>T,yg:()=>S});var N=g(3696);function A(I,M,g){return M in I?Object.defineProperty(I,M,{value:g,enumerable:!0,configurable:!0,writable:!0}):I[M]=g,I}function D(I,M){var g=Object.keys(I);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(I);M&&(N=N.filter((function(M){return Object.getOwnPropertyDescriptor(I,M).enumerable}))),g.push.apply(g,N)}return g}function z(I){for(var M=1;M<arguments.length;M++){var g=null!=arguments[M]?arguments[M]:{};M%2?D(Object(g),!0).forEach((function(M){A(I,M,g[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(g)):D(Object(g)).forEach((function(M){Object.defineProperty(I,M,Object.getOwnPropertyDescriptor(g,M))}))}return I}function i(I,M){if(null==I)return{};var g,N,A=function(I,M){if(null==I)return{};var g,N,A={},D=Object.keys(I);for(N=0;N<D.length;N++)g=D[N],M.indexOf(g)>=0||(A[g]=I[g]);return A}(I,M);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(I);for(N=0;N<D.length;N++)g=D[N],M.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(I,g)&&(A[g]=I[g])}return A}var C=N.createContext({}),j=function(I){var M=N.useContext(C),g=M;return I&&(g="function"==typeof I?I(M):z(z({},M),I)),g},T=function(I){var M=j(I.components);return N.createElement(C.Provider,{value:M},I.children)},y="mdxType",c={inlineCode:"code",wrapper:function(I){var M=I.children;return N.createElement(N.Fragment,{},M)}},e=N.forwardRef((function(I,M){var g=I.components,A=I.mdxType,D=I.originalType,C=I.parentName,T=i(I,["components","mdxType","originalType","parentName"]),y=j(g),e=A,S=y["".concat(C,".").concat(e)]||y[e]||c[e]||D;return g?N.createElement(S,z(z({ref:M},T),{},{components:g})):N.createElement(S,z({ref:M},T))}));function S(I,M){var g=arguments,A=M&&M.mdxType;if("string"==typeof I||A){var D=g.length,z=new Array(D);z[0]=e;var i={};for(var C in M)hasOwnProperty.call(M,C)&&(i[C]=M[C]);i.originalType=I,i[y]="string"==typeof I?I:A,z[1]=i;for(var j=2;j<D;j++)z[j]=g[j];return N.createElement.apply(null,z)}return N.createElement.apply(null,g)}e.displayName="MDXCreateElement"},4818:(I,M,g)=>{g.r(M),g.d(M,{assets:()=>C,contentTitle:()=>z,default:()=>c,frontMatter:()=>D,metadata:()=>i,toc:()=>j});var N=g(8102),A=(g(3696),g(9916));const D={sidebar_position:3},z="Configuration of the renderers",i={unversionedId:"configuration",id:"configuration",title:"Configuration of the renderers",description:"The renderer options accept the following fields:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/msagljs/docs/configuration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/msagljs/docs/getting-started"},next:{title:"API of @msagl/core",permalink:"/msagljs/docs/api"}},C={},j=[],T={toc:j},y="wrapper";function c(I){let{components:M,...D}=I;return(0,A.yg)(y,(0,N.A)({},T,D,{components:M,mdxType:"MDXLayout"}),(0,A.yg)("h1",{id:"configuration-of-the-renderers"},"Configuration of the renderers"),(0,A.yg)("p",null,"The renderer options accept the following fields:"),(0,A.yg)("ul",null,(0,A.yg)("li",{parentName:"ul"},(0,A.yg)("p",{parentName:"li"},(0,A.yg)("inlineCode",{parentName:"p"},"layoutType: 'default' | 'Sugiyama LR' | 'Sugiyama TB' | 'Sugiyama BT' | 'Sugiyama RL' | 'IPSepCola' | 'MDS'"),"\nThis option defines the algorithm to layout the graph.\nWhen the 'default' option is used and all the edges in the graph are undirected, IPSepCola algorithm is used; otherwise, the graph is laid out with the Sugiyama Scheme."),(0,A.yg)("p",{parentName:"li"},'"Sugiyama TB": creates a layered top-to-bottom illustrated below.\n',(0,A.yg)("img",{alt:"dark",src:g(4071).A+"#gh-dark-mode-only",width:"357",height:"127"}),"\n",(0,A.yg)("img",{alt:"light",src:g(7776).A+"#gh-light-mode-only",width:"357",height:"127"})))),(0,A.yg)("p",null,(0,A.yg)("a",{parentName:"p",href:"https://www.researchgate.net/profile/Tim-Dwyer-5/publication/6715571_IPSep-CoLa_An_Incremental_Procedure_for_Separation_Constraint_Layout_of_Graphs/links/0fcfd5081c588735c8000000/IPSep-CoLa-An-Incremental-Procedure-for-Separation-Constraint-Layout-of-Graphs.pdf"},"IPSepCola")," An Incremental Procedure for Separation Constraint Layout of Graphs: illustrated below."),(0,A.yg)("p",null,(0,A.yg)("img",{alt:"dark",src:g(9595).A+"#gh-dark-mode-only",width:"1883",height:"1421"}),"\n",(0,A.yg)("img",{alt:"light",src:g(8681).A+"#gh-light-mode-only",width:"1883",height:"1421"}),"."),(0,A.yg)("p",null,(0,A.yg)("a",{parentName:"p",href:"https://pubsys.mmsp-kn.de/pubsys/publishedFiles/BrPi06.pdf"},"MDS"),": Pivot Multidemensional Scaling:"),(0,A.yg)("p",null,(0,A.yg)("img",{alt:"Alt text",src:g(5144).A+"#gh-light-mode-only",width:"875",height:"432"}),"\n",(0,A.yg)("img",{alt:"Alt text",src:g(3599).A+"#gh-dark-mode-only",width:"875",height:"432"})),(0,A.yg)("pre",null,(0,A.yg)("code",{parentName:"pre"},"\n- `label`\n  - `fontFamily: string` - CSS font-family value. Default `'sans-serif'`.\n  - `fontSize: number` - Font size, default `16`.\n  - `lineHeight: number` - Line height relative to the font size, default `1`.\n  - `fontStyle: string` - CSS font-style value, default `'normal'`\n  - `fontWeight: string | number` - CSS font-weight value, default `'normal'`.\n- `edgeRoutingMode: EdgeRoutingMode` - Enum for supported routing modes, including `Spline`, `SplineBundling` `StraightLine`, `SugiyamaSplines`, `Rectilinear`, `RectilinearToCenter`, `None`. Default varies by `layoutType`.\n\n## Layout Editing\n\nThere are some layout editing capabilities that are demonstrated by the video below:\n\n\n[![video](./docs/video.png)](https://youtu.be/j-zsysohSU0)\nThey include:\n\n- dragging of the entities; one can select and drag a group of entities as well\n- deletion of the entities\n- node insertion\n- edge insertion\n- editing the node label\n- edge curve editing\n- undo/redo\n\n  The current limitations are:\n\n- the edge routing switches to straight lines when dragging\n- undo/redo does not work for node label text editing\n- the node does not resize for the new label text\n- only [the viewer with SVG](https://microsoft.github.io/msagljs/svg_backend/index.html) supports editing.\n")))}c.isMDXComponent=!0},9595:(I,M,g)=>{g.d(M,{A:()=>N});const N=g.p+"assets/images/awilliams_blackbg-41d0203725a974a3c249625588472fa6.svg"},8681:(I,M,g)=>{g.d(M,{A:()=>N});const N=g.p+"assets/images/awilliams_whitebg-b75f90302f77aacd10fee9a0867296a1.svg"},5144:(I,M,g)=>{g.d(M,{A:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NzUuMTM4NDc1MjEzMjM1NCIgaGVpZ2h0PSI0MzEuODg5MzY0NzEyODI0NjYiIHZlcnNpb249IjEuMSI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yKSI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJCbGFjayIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSA3NzAuMTM4NDc1MjEzMjM1NCA0MjEuODg5MzY0NzEyODI0NjYgTCA4NTUuMTM4NDc1MjEzMjM1NCA0MjEuODg5MzY0NzEyODI0NjYgQSAxMCwzLjc1IDAgMCAwIDg2NS4xMzg0NzUyMTMyMzU0IDQxOC4xMzkzNjQ3MTI4MjQ2NiBMIDg2NS4xMzg0NzUyMTMyMzU0IDQxMC42MzkzNjQ3MTI4MjQ2NiBBIDEwLDMuNzUgMCAwIDAgODU1LjEzODQ3NTIxMzIzNTQgNDA2Ljg4OTM2NDcxMjgyNDY2IEwgNzcwLjEzODQ3NTIxMzIzNTQgNDA2Ljg4OTM2NDcxMjgyNDY2IEEgMTAsMy43NSAwIDAgMCA3NjAuMTM4NDc1MjEzMjM1NCA0MTAuNjM5MzY0NzEyODI0NjYgTCA3NjAuMTM4NDc1MjEzMjM1NCA0MTguMTM5MzY0NzEyODI0NjYgQSAxMCwzLjc1IDAgMCAwIDc3MC4xMzg0NzUyMTMyMzU0IDQyMS44ODkzNjQ3MTI4MjQ2NiIvPgogICAgICAgIDx0ZXh0IHg9Ijc4Mi4zMzg0NzUyMTMyMzU1IiB5PSI0MTkuMzM5MzY0NzEyODI0NjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iQmxhY2siPgogICAgICAgICAgICA8dHNwYW4geD0iNzgyLjMzODQ3NTIxMzIzNTUiIGR5PSIwIj5rc3BhY2V5PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJCbGFjayIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSA1NjQuMDQ1MjM0MjQ0Mjg5MiAzNDguNzMzMjQ1MTUyOTY1MjUgTCA2NzkuMDQ1MjM0MjQ0Mjg5MiAzNDguNzMzMjQ1MTUyOTY1MjUgQSAxMCwzLjc1IDAgMCAwIDY4OS4wNDUyMzQyNDQyODkyIDM0NC45ODMyNDUxNTI5NjUyNSBMIDY4OS4wNDUyMzQyNDQyODkyIDMzNy40ODMyNDUxNTI5NjUyNSBBIDEwLDMuNzUgMCAwIDAgNjc5LjA0NTIzNDI0NDI4OTIgMzMzLjczMzI0NTE1Mjk2NTI1IEwgNTY0LjA0NTIzNDI0NDI4OTIgMzMzLjczMzI0NTE1Mjk2NTI1IEEgMTAsMy43NSAwIDAgMCA1NTQuMDQ1MjM0MjQ0Mjg5MiAzMzcuNDgzMjQ1MTUyOTY1MjUgTCA1NTQuMDQ1MjM0MjQ0Mjg5MiAzNDQuOTgzMjQ1MTUyOTY1MjUgQSAxMCwzLjc1IDAgMCAwIDU2NC4wNDUyMzQyNDQyODkyIDM0OC43MzMyNDUxNTI5NjUyNSIvPgogICAgICAgIDx0ZXh0IHg9IjU4Mi4yNDUyMzQyNDQyODkyIiB5PSIzNDYuMTgzMjQ1MTUyOTY1MjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iQmxhY2siPgogICAgICAgICAgICA8dHNwYW4geD0iNTgyLjI0NTIzNDI0NDI4OTIiIGR5PSIwIj5zd2lsbGlhbXM8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBkPSJNIDc5My4wNDc1MDU3MTAwNzA1IDQwNi44ODkzNjQ3MTI4MjQ2NiBMIDY0NS44MDU3MjAyNzYyMzM4IDM1MC41MjA4NzM1Nzg0MDg0NCIvPgogICAgICAgIDxwb2x5Z29uIHN0cm9rZT0iQmxhY2siIGZpbGw9Im5vbmUiIHBvaW50cz0iNjQ2LjIwMjAyNzk1Njk0MzQgMzQ5LjQ4NTY2NjY4Njg1NSA2NDEuMTM2MjAzNzQ3NDU0MSAzNDguNzMzMjQ1MTUyOTY1MjUgNjQ1LjQwOTQxMjU5NTUyNDMgMzUxLjU1NjA4MDQ2OTk2MTkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDQwNC43NzA2MzczMjc2MTkxNyAyNyBMIDQ1OS43NzA2MzczMjc2MTkxNyAyNyBBIDEwLDMuNzUgMCAwIDAgNDY5Ljc3MDYzNzMyNzYxOTE3IDIzLjI1IEwgNDY5Ljc3MDYzNzMyNzYxOTE3IDE1Ljc1IEEgMTAsMy43NSAwIDAgMCA0NTkuNzcwNjM3MzI3NjE5MTcgMTIgTCA0MDQuNzcwNjM3MzI3NjE5MTcgMTIgQSAxMCwzLjc1IDAgMCAwIDM5NC43NzA2MzczMjc2MTkxNyAxNS43NSBMIDM5NC43NzA2MzczMjc2MTkxNyAyMy4yNSBBIDEwLDMuNzUgMCAwIDAgNDA0Ljc3MDYzNzMyNzYxOTE3IDI3Ii8+CiAgICAgICAgPHRleHQgeD0iNDEwLjk3MDYzNzMyNzYxOTE2IiB5PSIyNC40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJCbGFjayI+CiAgICAgICAgICAgIDx0c3BhbiB4PSI0MTAuOTcwNjM3MzI3NjE5MTYiIGR5PSIwIj5icGl0dDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iQmxhY2siIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0gMjAgNDE4LjE2NDY4NTM5MDM2OTI0IEwgNzUgNDE4LjE2NDY4NTM5MDM2OTI0IEEgMTAsMy43NSAwIDAgMCA4NSA0MTQuNDE0Njg1MzkwMzY5MjQgTCA4NSA0MDYuOTE0Njg1MzkwMzY5MjQgQSAxMCwzLjc1IDAgMCAwIDc1IDQwMy4xNjQ2ODUzOTAzNjkyNCBMIDIwIDQwMy4xNjQ2ODUzOTAzNjkyNCBBIDEwLDMuNzUgMCAwIDAgMTAgNDA2LjkxNDY4NTM5MDM2OTI0IEwgMTAgNDE0LjQxNDY4NTM5MDM2OTI0IEEgMTAsMy43NSAwIDAgMCAxOS45OTk5OTk5OTk5OTk5OTYgNDE4LjE2NDY4NTM5MDM2OTI0Ii8+CiAgICAgICAgPHRleHQgeD0iMjYuMiIgeT0iNDE1LjYxNDY4NTM5MDM2OTIzIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IkJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2LjIiIGR5PSIwIj5oZm9yZDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iQmxhY2siIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0gMTk2LjQxMzgzMjUyMzI3OTg0IDM0NS45ODM0NjI5MzIxODM1NiBMIDI4MS40MTM4MzI1MjMyNzk4NCAzNDUuOTgzNDYyOTMyMTgzNTYgQSAxMCwzLjc1IDAgMCAwIDI5MS40MTM4MzI1MjMyNzk4NCAzNDIuMjMzNDYyOTMyMTgzNTYgTCAyOTEuNDEzODMyNTIzMjc5ODQgMzM0LjczMzQ2MjkzMjE4MzU2IEEgMTAsMy43NSAwIDAgMCAyODEuNDEzODMyNTIzMjc5ODQgMzMwLjk4MzQ2MjkzMjE4MzU2IEwgMTk2LjQxMzgzMjUyMzI3OTg0IDMzMC45ODM0NjI5MzIxODM1NiBBIDEwLDMuNzUgMCAwIDAgMTg2LjQxMzgzMjUyMzI3OTg0IDMzNC43MzM0NjI5MzIxODM1NiBMIDE4Ni40MTM4MzI1MjMyNzk4NCAzNDIuMjMzNDYyOTMyMTgzNTYgQSAxMCwzLjc1IDAgMCAwIDE5Ni40MTM4MzI1MjMyNzk4NCAzNDUuOTgzNDYyOTMyMTgzNTYiLz4KICAgICAgICA8dGV4dCB4PSIyMDguNjEzODMyNTIzMjc5ODMiIHk9IjM0My40MzM0NjI5MzIxODM1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJCbGFjayI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIyMDguNjEzODMyNTIzMjc5ODMiIGR5PSIwIj5sd2lsc29uPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJCbGFjayIgZD0iTSA2Ny4zODg4ODEwMDAyNjYyMSA0MDMuMTY0Njg1MzkwMzY5MjQgTCAyMTQuMzQ2NTM2MDQ3ODQ5MjcgMzQ3Ljc0NzY3MDU4NDg1NDUiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IkJsYWNrIiBmaWxsPSJub25lIiBwb2ludHM9IjIxNC43Mzc2NTE0NjgyNDAyNCAzNDguNzg0ODUwMzI1MzI0NiAyMTkuMDI0OTUxNTIzMDEzNiAzNDUuOTgzNDYyOTMyMTgzNTYgMjEzLjk1NTQyMDYyNzQ1ODMgMzQ2LjcxMDQ5MDg0NDM4NDQiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDM5NS45MDk3NjY0MDMzOTE5IDI0Ni42NzE0MDIzODQyNzA0IEwgNDY1LjkwOTc2NjQwMzM5MTkgMjQ2LjY3MTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDQ3NS45MDk3NjY0MDMzOTE5IDI0Mi45MjE0MDIzODQyNzA0IEwgNDc1LjkwOTc2NjQwMzM5MTkgMjM1LjQyMTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDQ2NS45MDk3NjY0MDMzOTE5IDIzMS42NzE0MDIzODQyNzA0IEwgMzk1LjkwOTc2NjQwMzM5MTkgMjMxLjY3MTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDM4NS45MDk3NjY0MDMzOTE5IDIzNS40MjE0MDIzODQyNzA0IEwgMzg1LjkwOTc2NjQwMzM5MTkgMjQyLjkyMTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDM5NS45MDk3NjY0MDMzOTE5IDI0Ni42NzE0MDIzODQyNzA0Ii8+CiAgICAgICAgPHRleHQgeD0iNDA1LjEwOTc2NjQwMzM5MTkiIHk9IjI0NC4xMjE0MDIzODQyNzA0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IkJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjQwNS4xMDk3NjY0MDMzOTE5IiBkeT0iMCI+a2JhY29uPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJCbGFjayIgZD0iTSA2MDcuNTM2NDE0MDAzMzM5NCAzMzMuNzMzMjQ1MTUyOTY1MjUgTCA0NDkuMzI2NjA1MjMzMzQ5MjYgMjQ5LjAzMTM1NDEwMzg5NjEiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IkJsYWNrIiBmaWxsPSJub25lIiBwb2ludHM9IjQ0OS44NDk3OTM5MzM2ODUzIDI0OC4wNTQxMTk5MDk4ODIyNyA0NDQuOTE4NTg2NjQ0MzQxNzYgMjQ2LjY3MTQwMjM4NDI3MDQgNDQ4LjgwMzQxNjUzMzAxMzIgMjUwLjAwODU4ODI5NzkwOTkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBkPSJNIDQzMi4yMjQxNzQ2MDI3NDUgMjcgTCA0MzAuOTg3MjAzNjgzODExMDYgMjI2LjY3MTQ5ODMyNzUwMDA1Ii8+CiAgICAgICAgPHBvbHlnb24gc3Ryb2tlPSJCbGFjayIgZmlsbD0ibm9uZSIgcG9pbnRzPSI0MjkuODc4NzUxNjQwNjk4MyAyMjYuNjY0NjMxNDMzODU4IDQzMC45NTYyMjkxMjgyNjYxIDIzMS42NzE0MDIzODQyNzA0IDQzMi4wOTU2NTU3MjY5MjM4NCAyMjYuNjc4MzY1MjIxMTQyMSIvPgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iQmxhY2siIGQ9Ik0gMjUzLjQxMzI3NDk0OTA2Nzg3IDMzMC45ODM0NjI5MzIxODM1NiBMIDQxMS45NjkyNzE4MDg4MjYzIDI0OC45Njg1ODY2NjgxNzAzIi8+CiAgICAgICAgPHBvbHlnb24gc3Ryb2tlPSJCbGFjayIgZmlsbD0ibm9uZSIgcG9pbnRzPSI0MTIuNDc4NTQ1MzAzNjc0MTQgMjQ5Ljk1MzE0NDIzMDUwNzE1IDQxNi40MTAzMjM5Nzc2MDM4NyAyNDYuNjcxNDAyMzg0MjcwNCA0MTEuNDU5OTk4MzEzOTc4NSAyNDcuOTg0MDI5MTA1ODMzNDYiLz4KICAgIDwvZz4KPC9zdmc+"},3599:(I,M,g)=>{g.d(M,{A:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NzUuMTM4NDc1MjEzMjM1NCIgaGVpZ2h0PSI0MzEuODg5MzY0NzEyODI0NjYiIHZlcnNpb249IjEuMSI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yKSI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJXaGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSA3NzAuMTM4NDc1MjEzMjM1NCA0MjEuODg5MzY0NzEyODI0NjYgTCA4NTUuMTM4NDc1MjEzMjM1NCA0MjEuODg5MzY0NzEyODI0NjYgQSAxMCwzLjc1IDAgMCAwIDg2NS4xMzg0NzUyMTMyMzU0IDQxOC4xMzkzNjQ3MTI4MjQ2NiBMIDg2NS4xMzg0NzUyMTMyMzU0IDQxMC42MzkzNjQ3MTI4MjQ2NiBBIDEwLDMuNzUgMCAwIDAgODU1LjEzODQ3NTIxMzIzNTQgNDA2Ljg4OTM2NDcxMjgyNDY2IEwgNzcwLjEzODQ3NTIxMzIzNTQgNDA2Ljg4OTM2NDcxMjgyNDY2IEEgMTAsMy43NSAwIDAgMCA3NjAuMTM4NDc1MjEzMjM1NCA0MTAuNjM5MzY0NzEyODI0NjYgTCA3NjAuMTM4NDc1MjEzMjM1NCA0MTguMTM5MzY0NzEyODI0NjYgQSAxMCwzLjc1IDAgMCAwIDc3MC4xMzg0NzUyMTMyMzU0IDQyMS44ODkzNjQ3MTI4MjQ2NiIvPgogICAgICAgIDx0ZXh0IHg9Ijc4Mi4zMzg0NzUyMTMyMzU1IiB5PSI0MTkuMzM5MzY0NzEyODI0NjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iV2hpdGUiPgogICAgICAgICAgICA8dHNwYW4geD0iNzgyLjMzODQ3NTIxMzIzNTUiIGR5PSIwIj5rc3BhY2V5PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJXaGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSA1NjQuMDQ1MjM0MjQ0Mjg5MiAzNDguNzMzMjQ1MTUyOTY1MjUgTCA2NzkuMDQ1MjM0MjQ0Mjg5MiAzNDguNzMzMjQ1MTUyOTY1MjUgQSAxMCwzLjc1IDAgMCAwIDY4OS4wNDUyMzQyNDQyODkyIDM0NC45ODMyNDUxNTI5NjUyNSBMIDY4OS4wNDUyMzQyNDQyODkyIDMzNy40ODMyNDUxNTI5NjUyNSBBIDEwLDMuNzUgMCAwIDAgNjc5LjA0NTIzNDI0NDI4OTIgMzMzLjczMzI0NTE1Mjk2NTI1IEwgNTY0LjA0NTIzNDI0NDI4OTIgMzMzLjczMzI0NTE1Mjk2NTI1IEEgMTAsMy43NSAwIDAgMCA1NTQuMDQ1MjM0MjQ0Mjg5MiAzMzcuNDgzMjQ1MTUyOTY1MjUgTCA1NTQuMDQ1MjM0MjQ0Mjg5MiAzNDQuOTgzMjQ1MTUyOTY1MjUgQSAxMCwzLjc1IDAgMCAwIDU2NC4wNDUyMzQyNDQyODkyIDM0OC43MzMyNDUxNTI5NjUyNSIvPgogICAgICAgIDx0ZXh0IHg9IjU4Mi4yNDUyMzQyNDQyODkyIiB5PSIzNDYuMTgzMjQ1MTUyOTY1MjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iV2hpdGUiPgogICAgICAgICAgICA8dHNwYW4geD0iNTgyLjI0NTIzNDI0NDI4OTIiIGR5PSIwIj5zd2lsbGlhbXM8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBkPSJNIDc5My4wNDc1MDU3MTAwNzA1IDQwNi44ODkzNjQ3MTI4MjQ2NiBMIDY0NS44MDU3MjAyNzYyMzM4IDM1MC41MjA4NzM1Nzg0MDg0NCIvPgogICAgICAgIDxwb2x5Z29uIHN0cm9rZT0iV2hpdGUiIGZpbGw9Im5vbmUiIHBvaW50cz0iNjQ2LjIwMjAyNzk1Njk0MzQgMzQ5LjQ4NTY2NjY4Njg1NSA2NDEuMTM2MjAzNzQ3NDU0MSAzNDguNzMzMjQ1MTUyOTY1MjUgNjQ1LjQwOTQxMjU5NTUyNDMgMzUxLjU1NjA4MDQ2OTk2MTkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDQwNC43NzA2MzczMjc2MTkxNyAyNyBMIDQ1OS43NzA2MzczMjc2MTkxNyAyNyBBIDEwLDMuNzUgMCAwIDAgNDY5Ljc3MDYzNzMyNzYxOTE3IDIzLjI1IEwgNDY5Ljc3MDYzNzMyNzYxOTE3IDE1Ljc1IEEgMTAsMy43NSAwIDAgMCA0NTkuNzcwNjM3MzI3NjE5MTcgMTIgTCA0MDQuNzcwNjM3MzI3NjE5MTcgMTIgQSAxMCwzLjc1IDAgMCAwIDM5NC43NzA2MzczMjc2MTkxNyAxNS43NSBMIDM5NC43NzA2MzczMjc2MTkxNyAyMy4yNSBBIDEwLDMuNzUgMCAwIDAgNDA0Ljc3MDYzNzMyNzYxOTE3IDI3Ii8+CiAgICAgICAgPHRleHQgeD0iNDEwLjk3MDYzNzMyNzYxOTE2IiB5PSIyNC40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJXaGl0ZSI+CiAgICAgICAgICAgIDx0c3BhbiB4PSI0MTAuOTcwNjM3MzI3NjE5MTYiIGR5PSIwIj5icGl0dDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iV2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0gMjAgNDE4LjE2NDY4NTM5MDM2OTI0IEwgNzUgNDE4LjE2NDY4NTM5MDM2OTI0IEEgMTAsMy43NSAwIDAgMCA4NSA0MTQuNDE0Njg1MzkwMzY5MjQgTCA4NSA0MDYuOTE0Njg1MzkwMzY5MjQgQSAxMCwzLjc1IDAgMCAwIDc1IDQwMy4xNjQ2ODUzOTAzNjkyNCBMIDIwIDQwMy4xNjQ2ODUzOTAzNjkyNCBBIDEwLDMuNzUgMCAwIDAgMTAgNDA2LjkxNDY4NTM5MDM2OTI0IEwgMTAgNDE0LjQxNDY4NTM5MDM2OTI0IEEgMTAsMy43NSAwIDAgMCAxOS45OTk5OTk5OTk5OTk5OTYgNDE4LjE2NDY4NTM5MDM2OTI0Ii8+CiAgICAgICAgPHRleHQgeD0iMjYuMiIgeT0iNDE1LjYxNDY4NTM5MDM2OTIzIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IldoaXRlIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2LjIiIGR5PSIwIj5oZm9yZDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iV2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0gMTk2LjQxMzgzMjUyMzI3OTg0IDM0NS45ODM0NjI5MzIxODM1NiBMIDI4MS40MTM4MzI1MjMyNzk4NCAzNDUuOTgzNDYyOTMyMTgzNTYgQSAxMCwzLjc1IDAgMCAwIDI5MS40MTM4MzI1MjMyNzk4NCAzNDIuMjMzNDYyOTMyMTgzNTYgTCAyOTEuNDEzODMyNTIzMjc5ODQgMzM0LjczMzQ2MjkzMjE4MzU2IEEgMTAsMy43NSAwIDAgMCAyODEuNDEzODMyNTIzMjc5ODQgMzMwLjk4MzQ2MjkzMjE4MzU2IEwgMTk2LjQxMzgzMjUyMzI3OTg0IDMzMC45ODM0NjI5MzIxODM1NiBBIDEwLDMuNzUgMCAwIDAgMTg2LjQxMzgzMjUyMzI3OTg0IDMzNC43MzM0NjI5MzIxODM1NiBMIDE4Ni40MTM4MzI1MjMyNzk4NCAzNDIuMjMzNDYyOTMyMTgzNTYgQSAxMCwzLjc1IDAgMCAwIDE5Ni40MTM4MzI1MjMyNzk4NCAzNDUuOTgzNDYyOTMyMTgzNTYiLz4KICAgICAgICA8dGV4dCB4PSIyMDguNjEzODMyNTIzMjc5ODMiIHk9IjM0My40MzM0NjI5MzIxODM1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJXaGl0ZSI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIyMDguNjEzODMyNTIzMjc5ODMiIGR5PSIwIj5sd2lsc29uPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJXaGl0ZSIgZD0iTSA2Ny4zODg4ODEwMDAyNjYyMSA0MDMuMTY0Njg1MzkwMzY5MjQgTCAyMTQuMzQ2NTM2MDQ3ODQ5MjcgMzQ3Ljc0NzY3MDU4NDg1NDUiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IldoaXRlIiBmaWxsPSJub25lIiBwb2ludHM9IjIxNC43Mzc2NTE0NjgyNDAyNCAzNDguNzg0ODUwMzI1MzI0NiAyMTkuMDI0OTUxNTIzMDEzNiAzNDUuOTgzNDYyOTMyMTgzNTYgMjEzLjk1NTQyMDYyNzQ1ODMgMzQ2LjcxMDQ5MDg0NDM4NDQiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDM5NS45MDk3NjY0MDMzOTE5IDI0Ni42NzE0MDIzODQyNzA0IEwgNDY1LjkwOTc2NjQwMzM5MTkgMjQ2LjY3MTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDQ3NS45MDk3NjY0MDMzOTE5IDI0Mi45MjE0MDIzODQyNzA0IEwgNDc1LjkwOTc2NjQwMzM5MTkgMjM1LjQyMTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDQ2NS45MDk3NjY0MDMzOTE5IDIzMS42NzE0MDIzODQyNzA0IEwgMzk1LjkwOTc2NjQwMzM5MTkgMjMxLjY3MTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDM4NS45MDk3NjY0MDMzOTE5IDIzNS40MjE0MDIzODQyNzA0IEwgMzg1LjkwOTc2NjQwMzM5MTkgMjQyLjkyMTQwMjM4NDI3MDQgQSAxMCwzLjc1IDAgMCAwIDM5NS45MDk3NjY0MDMzOTE5IDI0Ni42NzE0MDIzODQyNzA0Ii8+CiAgICAgICAgPHRleHQgeD0iNDA1LjEwOTc2NjQwMzM5MTkiIHk9IjI0NC4xMjE0MDIzODQyNzA0IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IldoaXRlIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjQwNS4xMDk3NjY0MDMzOTE5IiBkeT0iMCI+a2JhY29uPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJXaGl0ZSIgZD0iTSA2MDcuNTM2NDE0MDAzMzM5NCAzMzMuNzMzMjQ1MTUyOTY1MjUgTCA0NDkuMzI2NjA1MjMzMzQ5MjYgMjQ5LjAzMTM1NDEwMzg5NjEiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IldoaXRlIiBmaWxsPSJub25lIiBwb2ludHM9IjQ0OS44NDk3OTM5MzM2ODUzIDI0OC4wNTQxMTk5MDk4ODIyNyA0NDQuOTE4NTg2NjQ0MzQxNzYgMjQ2LjY3MTQwMjM4NDI3MDQgNDQ4LjgwMzQxNjUzMzAxMzIgMjUwLjAwODU4ODI5NzkwOTkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBkPSJNIDQzMi4yMjQxNzQ2MDI3NDUgMjcgTCA0MzAuOTg3MjAzNjgzODExMDYgMjI2LjY3MTQ5ODMyNzUwMDA1Ii8+CiAgICAgICAgPHBvbHlnb24gc3Ryb2tlPSJXaGl0ZSIgZmlsbD0ibm9uZSIgcG9pbnRzPSI0MjkuODc4NzUxNjQwNjk4MyAyMjYuNjY0NjMxNDMzODU4IDQzMC45NTYyMjkxMjgyNjYxIDIzMS42NzE0MDIzODQyNzA0IDQzMi4wOTU2NTU3MjY5MjM4NCAyMjYuNjc4MzY1MjIxMTQyMSIvPgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iV2hpdGUiIGQ9Ik0gMjUzLjQxMzI3NDk0OTA2Nzg3IDMzMC45ODM0NjI5MzIxODM1NiBMIDQxMS45NjkyNzE4MDg4MjYzIDI0OC45Njg1ODY2NjgxNzAzIi8+CiAgICAgICAgPHBvbHlnb24gc3Ryb2tlPSJXaGl0ZSIgZmlsbD0ibm9uZSIgcG9pbnRzPSI0MTIuNDc4NTQ1MzAzNjc0MTQgMjQ5Ljk1MzE0NDIzMDUwNzE1IDQxNi40MTAzMjM5Nzc2MDM4NyAyNDYuNjcxNDAyMzg0MjcwNCA0MTEuNDU5OTk4MzEzOTc4NSAyNDcuOTg0MDI5MTA1ODMzNDYiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},7776:(I,M,g)=>{g.d(M,{A:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTciIGhlaWdodD0iMTI3IiB2ZXJzaW9uPSIxLjEiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNCkiPgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iQmxhY2siIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0gMjM3IDI5IEwgMzIyIDI5IEEgMTAsMy43NSAwIDAgMCAzMzIgMjUuMjUgTCAzMzIgMTcuNzUgQSAxMCwzLjc1IDAgMCAwIDMyMiAxNCBMIDIzNyAxNCBBIDEwLDMuNzUgMCAwIDAgMjI3IDE3Ljc1IEwgMjI3IDI1LjI1IEEgMTAsMy43NSAwIDAgMCAyMzcgMjkiLz4KICAgICAgICA8dGV4dCB4PSIyNDkuMiIgeT0iMjYuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iQmxhY2siPgogICAgICAgICAgICA8dHNwYW4geD0iMjQ5LjIiIGR5PSIwIj5rc3BhY2V5PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJCbGFjayIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSAyMjIgNzQgTCAzMzcgNzQgQSAxMCwzLjc1IDAgMCAwIDM0NyA3MC4yNSBMIDM0NyA2Mi43NSBBIDEwLDMuNzUgMCAwIDAgMzM3IDU5IEwgMjIyIDU5IEEgMTAsMy43NSAwIDAgMCAyMTIgNjIuNzUgTCAyMTIgNzAuMjUgQSAxMCwzLjc1IDAgMCAwIDIyMiA3NCIvPgogICAgICAgIDx0ZXh0IHg9IjI0MC4yIiB5PSI3MS40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJCbGFjayI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIyNDAuMiIgZHk9IjAiPnN3aWxsaWFtczwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iQmxhY2siIGQ9Ik0gMjc5LjUgMjkgTCAyNzkuNSA1NCIvPgogICAgICAgIDxwb2x5Z29uIHN0cm9rZT0iQmxhY2siIGZpbGw9Im5vbmUiIHBvaW50cz0iMjc4LjM5MTUyNjY4Njc4NTMgNTQgMjc5LjUgNTkgMjgwLjYwODQ3MzMxMzIxNDcgNTQiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDEzNiA3NCBMIDE5MSA3NCBBIDEwLDMuNzUgMCAwIDAgMjAxIDcwLjI1IEwgMjAxIDYyLjc1IEEgMTAsMy43NSAwIDAgMCAxOTEgNTkgTCAxMzYgNTkgQSAxMCwzLjc1IDAgMCAwIDEyNiA2Mi43NSBMIDEyNiA3MC4yNSBBIDEwLDMuNzUgMCAwIDAgMTM2IDc0Ii8+CiAgICAgICAgPHRleHQgeD0iMTQyLjIiIHk9IjcxLjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IkJsYWNrIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjE0Mi4yIiBkeT0iMCI+YnBpdHQ8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDM1IDI5IEwgOTAgMjkgQSAxMCwzLjc1IDAgMCAwIDEwMCAyNS4yNSBMIDEwMCAxNy43NSBBIDEwLDMuNzUgMCAwIDAgOTAgMTQgTCAzNSAxNCBBIDEwLDMuNzUgMCAwIDAgMjUgMTcuNzUgTCAyNSAyNS4yNSBBIDEwLDMuNzUgMCAwIDAgMzUgMjkiLz4KICAgICAgICA8dGV4dCB4PSI0MS4yIiB5PSIyNi40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJCbGFjayI+CiAgICAgICAgICAgIDx0c3BhbiB4PSI0MS4yIiBkeT0iMCI+aGZvcmQ8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDIwIDc0IEwgMTA1IDc0IEEgMTAsMy43NSAwIDAgMCAxMTUgNzAuMjUgTCAxMTUgNjIuNzUgQSAxMCwzLjc1IDAgMCAwIDEwNSA1OSBMIDIwIDU5IEEgMTAsMy43NSAwIDAgMCAxMCA2Mi43NSBMIDEwIDcwLjI1IEEgMTAsMy43NSAwIDAgMCAxOS45OTk5OTk5OTk5OTk5OTYgNzQiLz4KICAgICAgICA8dGV4dCB4PSIzMi4yIiB5PSI3MS40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJCbGFjayI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIzMi4yIiBkeT0iMCI+bHdpbHNvbjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iQmxhY2siIGQ9Ik0gNjIuNSAyOSBMIDYyLjUgNTQiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IkJsYWNrIiBmaWxsPSJub25lIiBwb2ludHM9IjYxLjM5MTUyNjY4Njc4NTMgNTQgNjIuNSA1OSA2My42MDg0NzMzMTMyMTQ3IDU0Ii8+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJCbGFjayIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSAxMjguNSAxMTkgTCAxOTguNSAxMTkgQSAxMCwzLjc1IDAgMCAwIDIwOC41IDExNS4yNSBMIDIwOC41IDEwNy43NSBBIDEwLDMuNzUgMCAwIDAgMTk4LjUgMTA0IEwgMTI4LjUgMTA0IEEgMTAsMy43NSAwIDAgMCAxMTguNSAxMDcuNzUgTCAxMTguNSAxMTUuMjUgQSAxMCwzLjc1IDAgMCAwIDEyOC41IDExOSIvPgogICAgICAgIDx0ZXh0IHg9IjEzNy43IiB5PSIxMTYuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iQmxhY2siPgogICAgICAgICAgICA8dHNwYW4geD0iMTM3LjciIGR5PSIwIj5rYmFjb248L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBkPSJNIDI2MC4xNjY2NjY2NjY2NjY2MyA3NCBMIDE4Ny40OTQ4NjMzODM4NjI3NCAxMDIuMTkxNjQ3ODI1MjI1NjkiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IkJsYWNrIiBmaWxsPSJub25lIiBwb2ludHM9IjE4Ny4wOTM5NjEzNTg1MzY1MiAxMDEuMTU4MjExNDkzMjczNjQgMTgyLjgzMzMzMzMzMzMzMzMxIDEwNCAxODcuODk1NzY1NDA5MTg4OTUgMTAzLjIyNTA4NDE1NzE3NzczIi8+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJCbGFjayIgZD0iTSAxNjMuNSA3NCBMIDE2My41IDk5Ii8+CiAgICAgICAgPHBvbHlnb24gc3Ryb2tlPSJCbGFjayIgZmlsbD0ibm9uZSIgcG9pbnRzPSIxNjIuMzkxNTI2Njg2Nzg1MyA5OSAxNjMuNSAxMDQgMTY0LjYwODQ3MzMxMzIxNDcgOTkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IkJsYWNrIiBkPSJNIDc5LjMzMzMzMzMzMzMzMzMzIDc0IEwgMTQyLjA5OTQ3NTU4MDQwMjM2IDEwMS45NjUxMTI4ODIzNTc1MiIvPgogICAgICAgIDxwb2x5Z29uIHN0cm9rZT0iQmxhY2siIGZpbGw9Im5vbmUiIHBvaW50cz0iMTQxLjY0ODM1MTk2NzM0MDE1IDEwMi45Nzc2MzQ3Njk0NTI3MyAxNDYuNjY2NjY2NjY2NjY2NjkgMTA0IDE0Mi41NTA1OTkxOTM0NjQ1NiAxMDAuOTUyNTkwOTk1MjYyMyIvPgogICAgPC9nPgo8L3N2Zz4="},4071:(I,M,g)=>{g.d(M,{A:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTciIGhlaWdodD0iMTI3IiB2ZXJzaW9uPSIxLjEiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNCkiPgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iV2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0gMjM3IDI5IEwgMzIyIDI5IEEgMTAsMy43NSAwIDAgMCAzMzIgMjUuMjUgTCAzMzIgMTcuNzUgQSAxMCwzLjc1IDAgMCAwIDMyMiAxNCBMIDIzNyAxNCBBIDEwLDMuNzUgMCAwIDAgMjI3IDE3Ljc1IEwgMjI3IDI1LjI1IEEgMTAsMy43NSAwIDAgMCAyMzcgMjkiLz4KICAgICAgICA8dGV4dCB4PSIyNDkuMiIgeT0iMjYuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iV2hpdGUiPgogICAgICAgICAgICA8dHNwYW4geD0iMjQ5LjIiIGR5PSIwIj5rc3BhY2V5PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJXaGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSAyMjIgNzQgTCAzMzcgNzQgQSAxMCwzLjc1IDAgMCAwIDM0NyA3MC4yNSBMIDM0NyA2Mi43NSBBIDEwLDMuNzUgMCAwIDAgMzM3IDU5IEwgMjIyIDU5IEEgMTAsMy43NSAwIDAgMCAyMTIgNjIuNzUgTCAyMTIgNzAuMjUgQSAxMCwzLjc1IDAgMCAwIDIyMiA3NCIvPgogICAgICAgIDx0ZXh0IHg9IjI0MC4yIiB5PSI3MS40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJXaGl0ZSI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIyNDAuMiIgZHk9IjAiPnN3aWxsaWFtczwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iV2hpdGUiIGQ9Ik0gMjc5LjUgMjkgTCAyNzkuNSA1NCIvPgogICAgICAgIDxwb2x5Z29uIHN0cm9rZT0iV2hpdGUiIGZpbGw9Im5vbmUiIHBvaW50cz0iMjc4LjM5MTUyNjY4Njc4NTMgNTQgMjc5LjUgNTkgMjgwLjYwODQ3MzMxMzIxNDcgNTQiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDEzNiA3NCBMIDE5MSA3NCBBIDEwLDMuNzUgMCAwIDAgMjAxIDcwLjI1IEwgMjAxIDYyLjc1IEEgMTAsMy43NSAwIDAgMCAxOTEgNTkgTCAxMzYgNTkgQSAxMCwzLjc1IDAgMCAwIDEyNiA2Mi43NSBMIDEyNiA3MC4yNSBBIDEwLDMuNzUgMCAwIDAgMTM2IDc0Ii8+CiAgICAgICAgPHRleHQgeD0iMTQyLjIiIHk9IjcxLjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IldoaXRlIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjE0Mi4yIiBkeT0iMCI+YnBpdHQ8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDM1IDI5IEwgOTAgMjkgQSAxMCwzLjc1IDAgMCAwIDEwMCAyNS4yNSBMIDEwMCAxNy43NSBBIDEwLDMuNzUgMCAwIDAgOTAgMTQgTCAzNSAxNCBBIDEwLDMuNzUgMCAwIDAgMjUgMTcuNzUgTCAyNSAyNS4yNSBBIDEwLDMuNzUgMCAwIDAgMzUgMjkiLz4KICAgICAgICA8dGV4dCB4PSI0MS4yIiB5PSIyNi40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJXaGl0ZSI+CiAgICAgICAgICAgIDx0c3BhbiB4PSI0MS4yIiBkeT0iMCI+aGZvcmQ8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNIDIwIDc0IEwgMTA1IDc0IEEgMTAsMy43NSAwIDAgMCAxMTUgNzAuMjUgTCAxMTUgNjIuNzUgQSAxMCwzLjc1IDAgMCAwIDEwNSA1OSBMIDIwIDU5IEEgMTAsMy43NSAwIDAgMCAxMCA2Mi43NSBMIDEwIDcwLjI1IEEgMTAsMy43NSAwIDAgMCAxOS45OTk5OTk5OTk5OTk5OTYgNzQiLz4KICAgICAgICA8dGV4dCB4PSIzMi4yIiB5PSI3MS40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJXaGl0ZSI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIzMi4yIiBkeT0iMCI+bHdpbHNvbjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iV2hpdGUiIGQ9Ik0gNjIuNSAyOSBMIDYyLjUgNTQiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IldoaXRlIiBmaWxsPSJub25lIiBwb2ludHM9IjYxLjM5MTUyNjY4Njc4NTMgNTQgNjIuNSA1OSA2My42MDg0NzMzMTMyMTQ3IDU0Ii8+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJXaGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgZD0iTSAxMjguNSAxMTkgTCAxOTguNSAxMTkgQSAxMCwzLjc1IDAgMCAwIDIwOC41IDExNS4yNSBMIDIwOC41IDEwNy43NSBBIDEwLDMuNzUgMCAwIDAgMTk4LjUgMTA0IEwgMTI4LjUgMTA0IEEgMTAsMy43NSAwIDAgMCAxMTguNSAxMDcuNzUgTCAxMTguNSAxMTUuMjUgQSAxMCwzLjc1IDAgMCAwIDEyOC41IDExOSIvPgogICAgICAgIDx0ZXh0IHg9IjEzNy43IiB5PSIxMTYuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iV2hpdGUiPgogICAgICAgICAgICA8dHNwYW4geD0iMTM3LjciIGR5PSIwIj5rYmFjb248L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBkPSJNIDI2MC4xNjY2NjY2NjY2NjY2MyA3NCBMIDE4Ny40OTQ4NjMzODM4NjI3NCAxMDIuMTkxNjQ3ODI1MjI1NjkiLz4KICAgICAgICA8cG9seWdvbiBzdHJva2U9IldoaXRlIiBmaWxsPSJub25lIiBwb2ludHM9IjE4Ny4wOTM5NjEzNTg1MzY1MiAxMDEuMTU4MjExNDkzMjczNjQgMTgyLjgzMzMzMzMzMzMzMzMxIDEwNCAxODcuODk1NzY1NDA5MTg4OTUgMTAzLjIyNTA4NDE1NzE3NzczIi8+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJXaGl0ZSIgZD0iTSAxNjMuNSA3NCBMIDE2My41IDk5Ii8+CiAgICAgICAgPHBvbHlnb24gc3Ryb2tlPSJXaGl0ZSIgZmlsbD0ibm9uZSIgcG9pbnRzPSIxNjIuMzkxNTI2Njg2Nzg1MyA5OSAxNjMuNSAxMDQgMTY0LjYwODQ3MzMxMzIxNDcgOTkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IldoaXRlIiBkPSJNIDc5LjMzMzMzMzMzMzMzMzMzIDc0IEwgMTQyLjA5OTQ3NTU4MDQwMjM2IDEwMS45NjUxMTI4ODIzNTc1MiIvPgogICAgICAgIDxwb2x5Z29uIHN0cm9rZT0iV2hpdGUiIGZpbGw9Im5vbmUiIHBvaW50cz0iMTQxLjY0ODM1MTk2NzM0MDE1IDEwMi45Nzc2MzQ3Njk0NTI3MyAxNDYuNjY2NjY2NjY2NjY2NjkgMTA0IDE0Mi41NTA1OTkxOTM0NjQ1NiAxMDAuOTUyNTkwOTk1MjYyMyIvPgogICAgPC9nPgo8L3N2Zz4K"}}]);