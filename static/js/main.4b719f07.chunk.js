(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),s=a(2),l=a.n(s),i=a(3),u=a(4),m=a(5),g=a(7),h=a(6),f=a(8),p=a(10),b=a.n(p),d=r.a.createContext(),v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],tags:[],title:"Interactive Gallery",classes:{bgColor:"bg-color-1",fontColor:"font-color-1",borderColor:"border-color-1",btnColor:"btn-color-1"},showImages:!1,loading:!1},a.getRandomWords=Object(i.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"0611a28d197c0ceb84000027b440a4ba946c3b93d4991f1b3",e.next=3,b.a.get("https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=5000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&limit=10&api_key=".concat("0611a28d197c0ceb84000027b440a4ba946c3b93d4991f1b3"));case 3:if(200!==(t=e.sent).status){e.next=9;break}n=t.data,a.setState({tags:n}),e.next=10;break;case 9:return e.abrupt("return");case 10:case"end":return e.stop()}},e,this)})),a.getImages=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"61d227ee3bb49fa1867fd6c7487e57b4",e.next=3,b()("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("61d227ee3bb49fa1867fd6c7487e57b4","&text=").concat(t,"&sort=relevance&safe_search=1&per_page=10&format=json&nojsoncallback=1"));case 3:n=e.sent,r=n.data,o=r.photos.photo.slice(0,10),a.setState({images:o,showImages:!0,title:t});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.returnToTags=function(){a.setState({showImages:!1,title:"Interactive Gallery"})},a.getNewTags=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.getRandomWords();case 1:case"end":return e.stop()}},e,this)})),a.changeColorClasses=function(e){a.setState({classes:{bgColor:"bg-color-".concat(e),fontColor:"font-color-".concat(e),borderColor:"border-color-".concat(e),btnColor:"btn-color-".concat(e)}})},a.performSearch=function(e){a.getImages(e)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.getRandomWords();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(d.Provider,{value:{images:this.state.images,tags:this.state.tags,title:this.state.title,classes:this.state.classes,showImages:this.state.showImages,loading:this.state.loading,actions:{performSearch:this.performSearch,getImages:this.getImages,returnToTags:this.returnToTags,getNewTags:this.getNewTags,changeColorClasses:this.changeColorClasses}}},this.props.children)}}]),t}(n.Component),C=d.Consumer,w=function(e){var t=e.image,a="https://farm".concat(t.farm,".staticflickr.com/").concat(t.server,"/").concat(t.id,"_").concat(t.secret,".jpg"),n={backgroundImage:"url(".concat(a,")")};return r.a.createElement("li",{className:"photo-container"},r.a.createElement("div",{className:"photo",style:n}," "))},E=function(e){var t=e.tag,a=e.getImages,n=e.bgColor;return r.a.createElement("li",{className:"photo-container"},r.a.createElement("div",{className:"tag ".concat(n),onClick:function(){return a(t)}},r.a.createElement("p",null,t)))},k=function(){return r.a.createElement(C,null,function(e){var t=e.showImages,a=e.images,n=e.tags,o=e.classes,c=e.actions;return t?a.map(function(e){return r.a.createElement(w,{key:e.id,image:e})}):n.map(function(e){return r.a.createElement(E,{key:e.id,tag:e.word,getImages:c.getImages,bgColor:o.bgColor})})})},y=function(){return r.a.createElement(C,null,function(e){var t=e.classes,a=e.actions;return r.a.createElement("div",{className:"color-picker ".concat(t.borderColor)},["1","2","3","4","5"].map(function(e){return r.a.createElement("button",{key:e,className:"btn-theme bg-color-".concat(e),onClick:function(){return a.changeColorClasses(e)}})}))})},N=function(e){var t=e.classes,a=e.showImages,n=e.returnToTags,o=e.getNewTags;return r.a.createElement("div",{className:"btn-container"},a?r.a.createElement("button",{className:"btn ".concat(t.btnColor),onClick:n},"Return To Topics"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn ".concat(t.btnColor),onClick:o},"More Topics"),r.a.createElement(y,null)))},T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleValueChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.performSearch(a.state.value),a.setState({value:""})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=e.borderColor,a=e.btnColor;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"search-input ".concat(t),type:"text",placeholder:"Search...",onChange:this.handleValueChange,value:this.state.value}),r.a.createElement("button",{className:"btn submit-btn ".concat(a),type:"submit"},"Submit"))}}]),t}(n.Component),I=function(){return r.a.createElement(C,null,function(e){var t=e.title,a=e.classes,n=e.showImages,o=e.actions;return r.a.createElement("li",{className:"photo-header ".concat(a.borderColor)},r.a.createElement("span",{className:"title ".concat(a.fontColor)},t),r.a.createElement(T,{classes:a,performSearch:o.performSearch}),r.a.createElement(N,{classes:a,showImages:n,returnToTags:o.returnToTags,getNewTags:o.getNewTags}))})},S=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("ul",{className:"photo-list"},r.a.createElement(I,null),r.a.createElement(k,null)))},j=function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"}),";")},x=function(){return r.a.createElement(C,null,function(e){var t=e.loading;return r.a.createElement("div",{className:"container"},t?r.a.createElement(j,null):r.a.createElement(S,null))})};a(45),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.4b719f07.chunk.js.map