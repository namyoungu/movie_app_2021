(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{37:function(e,t,i){},60:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),n=i(29),r=i.n(n),c=i(9),u=i(2),o=(i(37),i(0));var l=function(e){return console.log(e),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"lorem__box",children:[Object(o.jsx)("h1",{className:"lorem__titme",children:"Lorem Ipsum"}),Object(o.jsx)("p",{className:"lorem__sub",children:'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'}),Object(o.jsx)("p",{children:'"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."'}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae risus dui. Sed dignissim eu felis tempor feugiat. Duis dignissim suscipit leo, vitae hendrerit dolor iaculis non. Nullam tempus pharetra magna a tempor. In rutrum pretium sem, quis feugiat ante bibendum ut. Fusce et tortor sed risus egestas maximus ac non turpis. In eget dapibus risus. Nulla sollicitudin varius nisl, id sollicitudin enim pulvinar ac. Suspendisse eu ultricies mauris, at vulputate nisl. Quisque semper eget orci laoreet bibendum. Quisque risus nulla, imperdiet nec ultricies ut, molestie non velit. Proin porttitor justo vitae dapibus dignissim."}),Object(o.jsx)("p",{children:"Quisque in ex ac lorem pretium tempus a in dolor. Suspendisse potenti. Integer pharetra eleifend augue id aliquet. Etiam condimentum fermentum pulvinar. Vivamus sed ultrices est. Cras accumsan venenatis lectus, et tincidunt nunc mattis sed. Nam turpis justo, pharetra sed bibendum quis, lobortis eu sem. Nulla bibendum dui ac tellus congue, id ullamcorper ipsum tristique. Sed nec hendrerit nibh. Proin lobortis, augue nec condimentum lobortis, lorem urna sollicitudin magna, sed cursus magna magna id nisl. Cras tincidunt suscipit lectus, suscipit placerat ipsum aliquet sodales. Sed leo nunc, pellentesque a suscipit a, pellentesque eu quam. Sed purus libero, consequat vel elementum sit amet, molestie ut ligula. Donec sed pulvinar arcu."})]})})},m=i(17),d=i.n(m),j=i(30),p=i(11),b=i(12),h=i(14),v=i(13),O=i(31),x=i.n(O),_=i(3),g=i.n(_);i(60);function f(e){var t=e.id,i=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(o.jsx)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:i,title:s,summary:a,poster:n,genres:r}},children:Object(o.jsxs)("div",{className:"movies__movie",children:[Object(o.jsx)("img",{src:n,alt:s}),Object(o.jsxs)("div",{className:"movie__data",children:[Object(o.jsx)("h3",{className:"movie__title",children:s}),Object(o.jsx)("h5",{className:"movie__year",children:i}),Object(o.jsx)("ul",{className:"movie__geners",children:r.map((function(e,t){return Object(o.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(o.jsx)("p",{className:"movie__summary",children:a})]})]})})}f.prototype={key:g.a.number.isRequired,id:g.a.number.isRequired,year:g.a.number.isRequired,tile:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genre:g.a.arrayOf(g.a.string).isRequired};var N=f,y=(i(64),function(e){Object(h.a)(i,e);var t=Object(v.a)(i);function i(){var e;Object(p.a)(this,i);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0},e.getMovies=Object(j.a)(d.a.mark((function t(){var i,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json");case 2:i=t.sent,s=i.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(i,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,i=e.movies;return Object(o.jsx)("section",{className:"container",children:t?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader__text",children:"Loading..."})}):i.map((function(e){return Object(o.jsx)("div",{className:"movies",children:Object(o.jsx)(N,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)},e.id)}))})}}]),i}(a.a.Component)),q=(i(65),function(e){Object(h.a)(i,e);var t=Object(v.a)(i);function i(e){return Object(p.a)(this,i),t.call(this,e)}return Object(b.a)(i,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,i=e.history;void 0===t.state&&i.push("/")}},{key:"render",value:function(){var e=this.props.location;if(void 0===e.state)return null;var t=e.state,i=t.poster,s=t.title,a=t.year,n=t.genres,r=t.summary;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"movies__detail__movie",children:[Object(o.jsx)("img",{src:i,alt:s}),Object(o.jsxs)("div",{className:"movie__detail__data",children:[Object(o.jsx)("h3",{className:"movie__detail__title",children:s}),Object(o.jsx)("h5",{className:"movie__detail__year",children:a}),Object(o.jsx)("ul",{className:"movie__detail__geners",children:n.map((function(e,t){return Object(o.jsx)("li",{className:"movie__detail__genre",children:e},t)}))}),Object(o.jsx)("p",{className:"movie__summary",children:r})]})]})})}}]),i}(a.a.Component)),k=(i(66),i(69));var S=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("nav",{className:"NavBar",children:[Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)(c.b,{to:"/about",children:Object(o.jsx)(k.a,{className:"Film"})}),Object(o.jsx)("span",{children:"MOVIES"})]}),Object(o.jsxs)("ul",{className:"routes",children:[Object(o.jsx)("li",{children:Object(o.jsx)(c.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(c.b,{to:"/about",children:"About"})})]})]}),Object(o.jsx)("hr",{})]})};var w=function(){return Object(o.jsxs)(c.a,{children:[Object(o.jsx)(S,{}),Object(o.jsx)(u.a,{path:"/",exact:!0,component:y}),Object(o.jsx)(u.a,{path:"/about",component:l}),Object(o.jsx)(u.a,{path:"/movie/:id",component:q})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.3ff93e26.chunk.js.map