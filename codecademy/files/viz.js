(function(){var e,t,n=this;AlphaBoostWidgets.network_viz={init:function(){var e,t,n,r,i=this;this.canvas=document.getElementById("network_viz_canvas"),this.ctx=this.canvas.getContext("2d"),this.resizeCanvas(),$(window).resize(function(){return i.resizeCanvas()}),this.minDist=140,this.user_particles=[];for(t=n=0;n<=100;t=++n)this.user_particles.push(new this.user_particle(this));this.content_particles={};for(t=r=0;r<=25;t=++r)e=new this.content_particle(this),this.content_particles[e.id]=e;return this.animate(),window.setInterval(this.rotateWords,3500)},rotateWords:function(){var e;return e=$("#the_words"),e.append(e.find(":first-child").detach()),$("#the_plus").toggleClass("rotate"),window.setTimeout("$('#the_plus').removeClass('rotate')",1e3)},requestAnimationFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}},resizeCanvas:function(){return this.w=$(this.canvas).parent().innerWidth(),this.h=$(this.canvas).parent().innerHeight(),this.canvas.width=this.w,this.canvas.height=this.h},paintCanvas:function(){return this.ctx.fillStyle="rgba(0,0,0,1)",this.ctx.fillRect(0,0,this.w,this.h)},draw:function(){var e,t,n,r,i,s,o;this.paintCanvas(),i=this.user_particles;for(n=0,r=i.length;n<r;n++)t=i[n],this.updateParticlePosition(t),t.draw();this.linkupParticles(),s=this.content_particles,o=[];for(e in s)t=s[e],o.push(t.draw());return o},updateParticlePosition:function(e){return e.x+=e.vx,e.y+=e.vy},linkupParticles:function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;i={},v=this.content_particles;for(u in v)n=v[u],i[n.id]=[];m=this.user_particles;for(p=0,d=m.length;p<d;p++){l=m[p],a={},g=this.content_particles;for(u in g)n=g[u],s=this.calculateDistance(l,n),s<=this.minDist*(n.radius/4)&&(a[s]=n);o=Object.keys(a).sort(),o.length>0&&(s=o[0],n=a[s],i[n.id].push(l),e=(l.x-n.x)/1e3,t=(l.y-n.y)/1e3,l.vx-=e*n.radius/30,l.vy-=t*n.radius/30,n.vx+=e/20,n.vy+=t/20)}y=[];for(r in i)h=i[r],this.content_particles[r].radius=2+h.length/3.5,this.content_particles[r].radius>6&&(this.content_particles[r].radius=6),y.push(function(){var e,t,n;n=[];for(e=0,t=h.length;e<t;e++)c=h[e],n.push(function(){var e,t,n;n=[];for(e=0,t=h.length;e<t;e++)f=h[e],n.push(this.drawConnection(f,c));return n}.call(this));return n}.call(this));return y},calculateDistance:function(e,t){var n,r;return n=e.x-t.x,r=e.y-t.y,Math.sqrt(n*n+r*r)},drawConnection:function(e,t){return this.ctx.beginPath(),this.ctx.strokeStyle="rgba(255,255,255,"+(.6-this.calculateDistance(e,t)/this.minDist)+")",this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(t.x,t.y),this.ctx.stroke(),this.ctx.closePath()},animate:function(){var e;return AlphaBoostWidgets.network_viz.draw(),e=AlphaBoostWidgets.network_viz.requestAnimationFrame(),e(AlphaBoostWidgets.network_viz.animate)},user_particle:t=function(){function e(e){this.canvas=e,this.respawn(),this.x=Math.random()*this.canvas.w,this.y=Math.random()*this.canvas.h}return e.prototype.respawn=function(){return this.radius=2,this.vx=-1+Math.random()*.5,this.vy=-1+Math.random()*.5,Math.round(Math.random())?(this.x=Math.round(Math.random())*this.canvas.w,this.y=Math.random()*this.canvas.h):(this.y=Math.round(Math.random())*this.canvas.h,this.x=Math.random()*this.canvas.w)},e.prototype.draw=function(){return(this.x>this.canvas.w+10||this.x<-10||this.y>this.canvas.h+10||this.y<-10)&&this.respawn(),this.canvas.ctx.fillStyle="white",this.canvas.ctx.beginPath(),this.canvas.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),this.canvas.ctx.fill()},e}(),content_particle:e=function(){function e(e){this.canvas=e,this.id=this.canvas.generateId(),this.respawn()}return e.prototype.respawn=function(){return this.radius=Math.floor(Math.random()*3+2),this.vx=-1+Math.random()*4,this.vy=-1+Math.random()*4,this.x=Math.random()*this.canvas.w,this.y=Math.random()*this.canvas.h},e.prototype.draw=function(){this.x+=this.vx,this.y+=this.vy;if(this.x>this.canvas.w+10||this.x<-10||this.y>this.canvas.h+10||this.y<-10)return this.respawn()},e}(),generateId:function(){return this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()},s4:function(){return((1+Math.random())*65536|0).toString(16).substring(1)}}}).call(this);