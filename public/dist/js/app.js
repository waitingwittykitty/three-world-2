(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},"16f4":function(e,t,a){"use strict";a("d747")},1703:function(e,t,a){},2:function(e,t){},"2a84":function(e,t,a){"use strict";a("30a1")},3:function(e,t){},"30a1":function(e,t,a){},"3ede":function(e,t,a){"use strict";a.r(t);var n=a("f2bf"),r={class:"participate"};function o(e,t,a,o,i,c){var s=Object(n["v"])("ThreeDGarden");return Object(n["p"])(),Object(n["d"])("div",r,[Object(n["g"])(s,{msg:"",subtitle:""})])}var i=Object(n["B"])("data-v-21a8cf0e");Object(n["s"])("data-v-21a8cf0e");var c={class:"threedgarden"},s=Object(n["g"])("div",{id:"webgl"},null,-1);Object(n["q"])();var l=i((function(e,t,a,r,o,i){return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",c,[Object(n["g"])("h1",null,Object(n["x"])(a.msg),1),Object(n["g"])("h2",null,Object(n["x"])(a.subtitle),1)]),s],64)})),d=(a("a4d3"),a("e01a"),a("99af"),a("cb29"),a("4de4"),a("4160"),a("a15b"),a("d81d"),a("b0c0"),a("a9e3"),a("dca8"),a("d3b7"),a("820e"),a("3ca3"),a("38cf"),a("2ca0"),a("498a"),a("1913"),a("9911"),a("159b"),a("ddb0"),a("b85c"),a("2909"));Object(n["s"])("data-v-157bfe4b");Object(n["q"])();var u=a("e6a9"),p="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1bmtub3duIiwic3ViIjoxNTI2NywiaWF0IjoxNjM2NjU3ODUxLCJqdGkiOiIwNTBiMzIxNC02NzcxLTRlYzktODhmMS02NTVhYWVhNWQzN2QiLCJpc3MiOiIvL215LmZhcm0uYm90OjQ0MyIsImV4cCI6MTY0MTg0MTg1MSwibXF0dCI6ImNsZXZlci1vY3RvcHVzLnJtcS5jbG91ZGFtcXAuY29tIiwiYm90IjoiZGV2aWNlXzE1Mjk3Iiwidmhvc3QiOiJ4aWNvbmZ1bSIsIm1xdHRfd3MiOiJ3c3M6Ly9jbGV2ZXItb2N0b3B1cy5ybXEuY2xvdWRhbXFwLmNvbTo0NDMvd3MvbXF0dCJ9.K8jzw-l_KduohGUgS_rkmNx4700XQyZX3-JCigk-5gXf4y-aemDNemzABGpIvULVj9D02RXEiLAzPtSxRpGS_AWpwd0OSU35HNO_pCL7-KLmtmpanAOxutflPe9KN_stU1AgZC42TmMYLYeMZY1ornQOZTaIgT6dYJkqJex7HV6D1LS-1yjvEdPM2E1UTh6OWUFDndq-fdwyVNuQfYdbu0CLhTua3SaNaXCueZ7qew3-XVUx48PS2X8XFACkveZbRfb55qgabT-WpcQB4KyujdKFbAotZqJeZ1_aCxTa4WT_y_zFV7gVptgeK2FAXC1DE9cH4FJXipt0AMPksQGShA",m=new u["Farmbot"]({token:p});m.connect().then((function(){return m.setConfig("MARTY","HEY HEY HEY"),console.log(m.getConfig("MARTY")),m.getConfig("MARTY")})).then((function(){return m.moveRelative({x:1,y:2,z:3,speed:100})})),console.log("bot",m);a("9556");var b=a("6b0d"),h=a.n(b);Detector.webgl||Detector.addGetWebGLMessage();var g=window.postdata;console.log("postdata",g);var f=g.plugin_name,v=g.plugin_version,_=g.plugin_url,E=(g.theme_uri,g.rest_url),w=g.world_id;console.log("pluginName",f,v);var j,O,x,T,y=!1;T=new dat.GUI({autoPlace:!0,closeOnTop:!0}),T.close(),T.domElement.id="gui";var R,S,H=T.addFolder("Rotation + Animation"),I=T.addFolder("Camera Position"),k=T.addFolder("Directional Light"),M=(T.addFolder("Allotments"),T.addFolder("Beds"),T.addFolder("Plants"),T.addFolder("Annotations"),T.addFolder("Character")),D={action:"Idle"};D.actionTime=Date.now();var P={},A=["Breathing Idle","Driving","Idle","Left Turn","Pointing","Pointing Gesture"];A=[].concat(Object(d["a"])(A),["Right Turn","Running","Talking","Turn","Walking","Walking Backwards"]);var L={modes:Object.freeze({NONE:Symbol("none"),PRELOAD:Symbol("preload"),INITIALISING:Symbol("initialising"),CREATING_LEVEL:Symbol("creating_level"),ACTIVE:Symbol("active"),GAMEOVER:Symbol("gameover")}),ANIMATE:!1,assetsPath:"".concat(_,"assets/"),data:{world:[{id:w}],scene:[],allotment:[],bed:[],plant:[],planting_plan:[]},intersectedObject1:null,intersectedObject2:null,colliders:[],environment:{},farmhouse:{}};L.mode=L.modes.NONE,H.add(L,"ANIMATE").name("Run Animation");SFX.supportsAudioType("mp3");var C={assets:["".concat(L.assetsPath,"fbx/environment.fbx"),"".concat(L.assetsPath,"fbx/girl-walk.fbx"),"".concat(L.assetsPath,"fbx/usb.fbx")],oncomplete:function(){q()}};A.forEach((function(e){C.assets.push("".concat(L.assetsPath,"fbx/anims2/").concat(e,".fbx"))})),L.mode=L.modes.PRELOAD,console.log("params",L),console.log("options",C);var z=new THREE.FBXLoader,N=new THREE.TextureLoader,G=new THREE.Clock,W=new THREE.Raycaster,F=new THREE.Raycaster,B=new THREE.Vector2,V="".concat(E,"scene/?_embed&per_page=100"),X="".concat(E,"allotment/?_embed&per_page=100"),J="".concat(E,"bed/?_embed&per_page=100"),Y="".concat(E,"planting_plan/?_embed&per_page=100"),Z="".concat(E,"plant/?_embed&per_page=100"),U=[V,X,J,Y,Z];function q(){console.log("init ************************************");var e=!0;if(localStorage&&e&&!y){var t=localStorage.getItem("threedgarden"),a=JSON.parse(t);void 0!=a?(console.log("LOCALSTORAGE ITEM RETRIEVED",a),L.data=a.data):(console.log("LOCALSTORAGE ITEM NOT RETRIEVED",a),e=!1)}else console.log("LOCALSTORAGE NOT AVAILABLE"),e=!1;e?K():Promise.allSettled(U.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e[0].type;switch(t){case"scene":L.data.scene=Object(d["a"])(e);break;case"allotment":L.data.allotment=Object(d["a"])(e);break;case"bed":L.data.bed=Object(d["a"])(e);break;case"plant":L.data.plant=Object(d["a"])(e);break;case"planting_plan":L.data.planting_plan=Object(d["a"])(e);break;default:break}console.log("data",e)}))}))).then((function(e){console.log("results",e),e.forEach((function(e,t){e.status,"rejected"==e.status&&console.log(e)})),console.log("params.data",L.data),localStorage.setItem("threedgarden",JSON.stringify(L)),K()})),window.addEventListener("resize",Q,!1)}function Q(){O.aspect=window.innerWidth/window.innerHeight,O.updateProjectionMatrix(),R.setSize(window.innerWidth,window.innerHeight)}function K(){console.log("params.data.scene",L.data.scene);var e=L.data.scene[0],t=e.id;if(j=new THREE.Scene,j.name="ThreeD Garden",console.log("scene",j),e.acf.scene_background_image_px){var a=[e.acf.scene_background_image_px,e.acf.scene_background_image_nx,e.acf.scene_background_image_py,e.acf.scene_background_image_ny,e.acf.scene_background_image_pz,e.acf.scene_background_image_nz],n=(new THREE.CubeTextureLoader).load(a);n.format=THREE.RGBFormat,j.background=n}else if(e.acf.scene_background_image)var r=N.load(e.acf.scene_background_image,(function(){var e=new THREE.WebGLCubeRenderTarget(r.image.height);e.fromEquirectangularTexture(R,r),j.background=e}));else e.acf.scene_background_color&&(j.background=new THREE.Color(e.acf.scene_background_color));var o=le(e.acf.scene_plane_width_x,e.acf.scene_plane_length_y,e.acf.scene_plane_background_color);if(o.name="plane-jane",o.rotation.x=-Math.PI/2,H.add(o.rotation,"x",-Math.PI,Math.PI).listen(),H.add(o.rotation,"y",-Math.PI,Math.PI).listen(),H.add(o.rotation,"z",-Math.PI,Math.PI).listen(),e.acf.scene_plane_texture_image){o.material.roughness=0,o.material.map=N.load(e.acf.scene_plane_texture_image);var i=o.material.map;i.wrapS=THREE.RepeatWrapping,i.wrapT=THREE.RepeatWrapping,i.repeat.set(4,4)}var c=de(16777215,2.1);c.position.set(-90,-120,120);var s=new THREE.CameraHelper(c.shadow.camera);s.visible=!1,k.add(s,"visible",0,20).name("Show Light Helper"),k.add(c,"intensity",0,20),k.add(c.position,"x",-500,500),k.add(c.position,"y",-500,500),k.add(c.position,"z",-500,500),o.add(c),j.add(s),j.add(o),O=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,.1,1e3),O.name="gardencam1",O.position.set(86,64,182);var l=new THREE.CameraHelper(O);l.visible=!1,j.add(l),I.add(l,"visible",0,20).name("Show Camera Helper"),I.add(O.position,"x",-500,500).listen(),I.add(O.position,"y",-500,500).listen(),I.add(O.position,"z",-500,500).listen(),R=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),R.shadowMap.enabled=!0,R.setSize(window.innerWidth-100,window.innerHeight-140),R.domElement.camera=O,R.domElement.targetList=o.children,R.domElement.addEventListener("pointermove",pe,!1),R.domElement.addEventListener("pointerdown",me,!1),x=new THREE.OrbitControls(O,R.domElement),x.enableDamping=!0,x.dampingFactor=.25,x.enableZoom=!0,x.rotateSpeed=.5,x.autoRotate=!1,x.autoRotateSpeed=.03,x.minDistance=.01,x.maxDistance=340,x.maxPolarAngle=Math.PI/2-.04,x.target=new THREE.Vector3(0,0,0),R.domElement.controls=x,S=document.querySelector("#webgl"),S.append(T.domElement),S.append(R.domElement),R.domElement,oe(L.data.allotment,o,t),z.load("".concat(L.assetsPath,"characters/SK_Chr_Farmer_Male_01.fbx"),(function(e){e.mixer=new THREE.AnimationMixer(e),D.mixer=e.mixer,D.root=e.mixer.getRoot(),e.name="Gardener",e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1)})),N.load("".concat(L.assetsPath,"textures/PolygonFarm_Texture_01_B.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.map=t)}))})),D.object=new THREE.Object3D,D.object.add(e),D.object.scale.set(.033,.033,.033),D.object.rotation.x=Math.PI/2,o.add(D.object),M.add(D.object,"visible").name("Show Character").listen()})),ae(o),re(o),ne(o);var d=new JoyStick({onMove:te,game:S});console.log("joystick",d);var u=function e(){var t=G.getDelta();if(ue(O,o.children),x.update(),TWEEN.update(),requestAnimationFrame(e),L.ANIMATE&&(o.rotation.z-=7e-4),void 0!==D.mixer&&D.mixer.update(t),"Walking"==D.action){var a=Date.now()-D.actionTime;a>2e3&&D.move.forward>.7&&$("Running")}if(void 0!==D.move&&ee(t),void 0!=D.cameras&&void 0!=D.cameras.active){O.position.lerp(D.cameras.active.getWorldPosition(new THREE.Vector3),.05);var n=D.object.position.clone();n.y+=200,O.lookAt(n)}R.render(j,O)},p=function e(t){var a=A.pop();t.load("".concat(L.assetsPath,"fbx/anims2/").concat(a,".fbx"),(function(n){P[a]=n.animations[0],A.length>0?e(t):(A=[],$("Idle"),u())}))};p(z)}function $(e){var t=D.mixer.clipAction(P[e]);t.time=0,console.log("PLAYER: action",t),D.mixer.stopAllAction(),D.action=e,D.actionTime=Date.now(),t.play()}function ee(e){var t=D.object.position.clone();t.y+=60;var a=new THREE.Vector3;D.object.getWorldDirection(a),D.move.forward<0&&a.negate();new THREE.Raycaster(t,a);var n=!1;L.colliders;if(!n)if(D.move.forward>0){var r="Running"==D.action?24:8;D.object.translateZ(e*r)}else D.move.forward<0&&D.object.translateZ(2*-e);D.object.rotateY(D.move.turn*e)}function te(e,t){t=-t,e>.2?"Walking"!=D.action&&"Running"!=D.action&&$("Walking"):e<-.2?"Walking Backwards"!=D.action&&$("Walking Backwards"):(e=0,Math.abs(t)>.05?"Left Turn"!=D.action&&$("Left Turn"):"Idle"!=D.action&&$("Idle")),D.move={forward:e,turn:t}}function ae(e){z.load("".concat(L.assetsPath,"fbx/Building_Farm_House_02.fbx"),(function(e){L.farmhouse=e,L.colliders=[],e.rotation.y=Math.PI/180*270,e.position.set(0,0,100),e.scale.set(2.2,2.2,2.2),j.add(e),e.traverse((function(e){e.isMesh&&(e.name.startsWith("proxy")?(L.colliders.push(e),e.material.visible=!1):(e.castShadow=!0,e.receiveShadow=!0))})),N.load("".concat(L.assetsPath,"textures/SimpleFarm.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.map=t)}))}))}))}function ne(e){z.load("".concat(L.assetsPath,"fbx/Prop_Chicken_Coop_02.fbx"),(function(e){L.farmhouse=e,L.colliders=[],e.rotation.y=Math.PI/180*90,e.position.set(80,0,-10),e.scale.set(2.2,2.2,2.2),j.add(e),e.traverse((function(e){e.isMesh&&(e.name.startsWith("proxy")?(L.colliders.push(e),e.material.visible=!1):(e.castShadow=!0,e.receiveShadow=!0))})),N.load("".concat(L.assetsPath,"textures/SimpleFarm.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.map=t)}))}))}))}function re(e){var t,a=8,n=-45,r=0,o=-138,i=20;for(t=1;t<=a;t++)z.load("".concat(L.assetsPath,"fbx/SM_Env_Road_Gravel_Straight_01.fbx"),(function(e){e.position.set(n,0,o),n+=r,o+=i,e.scale.set(.02,.01,.02),e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),N.load("".concat(L.assetsPath,"textures/PolygonFarm_Texture_03_A.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.transparent=!0,e.material.opacity=.7,e.material.map=t)}))})),j.add(e)}));for(t=1;t<=1;t++)z.load("".concat(L.assetsPath,"fbx/SM_Env_Road_Gravel_T_Section_01.fbx"),(function(e){console.log("ROAD T startX, startZ",n,o),e.position.set(n,0,o),n+=r,o+=i,e.scale.set(.02,.01,.02),e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),N.load("".concat(L.assetsPath,"textures/PolygonFarm_Texture_03_A.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.transparent=!0,e.material.opacity=.7,e.material.map=t)}))})),j.add(e),console.log("ROAD T object",e)}))}function oe(e,t,a){console.log("ALLOTMENTS",e);var n=e.filter((function(e){return e.acf.allotment_scene==a}));n.forEach((function(e){var a={parameters:{},position:{},images:{}};a.parameters.x=parseInt(e.acf.allotment_width),a.parameters.y=parseInt(e.acf.allotment_length),a.parameters.z=parseInt(e.acf.allotment_height),a.position.x=parseInt(e.acf.allotment_position_x),a.position.y=parseInt(e.acf.allotment_position_y),a.position.z=parseInt(e.acf.allotment_position_z),a.images.texture=e.acf.allotment_texture_image,a.images.featured=be(e),a.shape=e.acf.allotment_shape,a.color=e.acf.allotment_color,a.title=e.title.rendered,a.postID=e.id,a.description=e.content.rendered,a.link=e.link;var n=se(a.shape,a.parameters.x,a.parameters.y,a.parameters.z,a.color);if(n.name=a.title,n.userData.type="structure",n.userData.postID=a.postID,n.userData.description=a.description,n.userData.annotation=a.title,n.userData.link=a.link,n.position.x=a.position.x,n.position.y=a.position.y,n.position.z=n.geometry.parameters.depth/2+a.position.z,n.material.roughness=.9,null!=a.images.texture&&0!=a.images.texture){n.material.map=N.load(a.images.texture);for(var r=0;r<n.material.length;r++){n.material[r].map=N.load(a.images.texture);var o=n.material[r].map;o.wrapS=THREE.RepeatWrapping,o.wrapT=THREE.RepeatWrapping,o.repeat.set(4,4)}}t.add(n),ie(L.data.bed,t,a.postID,n.position.x,n.position.y,0)}))}function ie(e,t,a,n,r,o){var i=e.filter((function(e){return e.acf.bed_allotment==a}));i.forEach((function(e){var a={parameters:{},position:{},images:{}};a.parameters.x=parseInt(e.acf.bed_width)/12,a.parameters.y=parseInt(e.acf.bed_length)/12,a.parameters.z=parseInt(e.acf.bed_height)/12,a.position.x=parseInt(e.acf.bed_position_x)/12+n,a.position.y=parseInt(e.acf.bed_position_y)/12+r,a.position.z=parseInt(e.acf.bed_position_z)/12+a.parameters.z/2,a.images.texture=e.acf.bed_texture_image,a.images.featured=be(e),a.shape=e.acf.bed_shape,a.color=e.acf.bed_color,a.title=e.title.rendered,a.postID=e.id,a.description=e.content.rendered,a.link=e.link;var o=se(a.shape,a.parameters.x,a.parameters.y,a.parameters.z,a.color);if(o.name=a.title,o.userData.type="structure",o.userData.postID=a.postID,o.userData.description=a.description,o.userData.annotation=a.title,o.userData.link=a.link,o.position.x=a.position.x?a.position.x:0,o.position.y=a.position.y?a.position.y:0,o.position.z=a.position.z?a.position.z:0,o.material.roughness=.9,null!=a.images.texture&&0!=a.images.texture){o.material.map=N.load(a.images.texture);for(var i=0;i<o.material.length;i++){o.material[i].map=N.load(a.images.texture);var c=o.material[i].map;c.wrapS=THREE.RepeatWrapping,c.wrapT=THREE.RepeatWrapping,c.repeat.set(4,4)}}t.add(o),L.colliders.push(o),ce(L.data.planting_plan,t,a.postID,o.position.x,o.position.y,0)}))}function ce(e,t,a,n,r,o){var i=[],c=[];e.forEach((function(e){e.acf.planting_plan_bed_plant_schedule.forEach((function(t){t.planting_plan_bed==a&&c.pushIfNotExist(e,(function(t){return t.id===e.id}))})),i=[].concat(c)})),i.length>0&&console.log("filteredPostObject",i),i.forEach((function(e){e.acf.planting_plan_bed_plant_schedule.forEach((function(o){if(o.planting_plan_bed==a){var i=L.data.plant.filter((function(e){return e.id==o.planting_plan_plant}));i.forEach((function(a){var i={parameters:{},position:{},images:{}};i.parameters.x=Number(a.acf.plant_width)/12,i.parameters.y=Number(a.acf.plant_length)/12,i.parameters.z=Number(a.acf.plant_height)/12,i.position.x=parseInt(o.plant_position_x)/12+n,i.position.y=parseInt(o.plant_position_y)/12+r,i.position.z=parseInt(o.plant_position_z)/12+i.parameters.z/2,i.images.texture=a.acf.plant_texture_image,i.images.featured=be(e),i.shape=a.acf.plant_shape,i.color=a.acf.plant_color,i.title=a.title.rendered,i.postID=a.id,i.description=a.content.rendered,i.link=a.link,console.log("PLANT",i);var c=se(i.shape,i.parameters.x,i.parameters.y,i.parameters.z,i.color);if(c.name=i.title,c.userData.type="structure",c.userData.postID=i.postID,c.userData.description=i.description,c.userData.annotation=i.title,c.userData.link=i.link,c.position.x=i.position.x?i.position.x:0,c.position.y=i.position.y?i.position.y:0,c.position.z=i.position.z?i.position.z:0,c.rotation.x=Math.PI/2,c.material.roughness=.9,null!=i.images.texture&&0!=i.images.texture){c.material.map=N.load(i.images.texture);for(var s=0;s<c.material.length;s++){c.material[s].map=N.load(i.images.texture);var l=c.material[s].map;l.wrapS=THREE.RepeatWrapping,l.wrapT=THREE.RepeatWrapping,l.repeat.set(4,4)}}console.log("plant structure",c),t.add(c),L.colliders.push(c)}))}}))}))}function se(e,t,a,n,r){var o,i,c;switch(e){case"Box":o=new THREE.BoxGeometry(t,a,n),i=new THREE.MeshStandardMaterial({transparent:!0,opacity:.8,color:r,side:THREE.DoubleSide,depthWrite:!0}),c=new THREE.Mesh(o,[i,i,i,i]),c.castShadow=!0;break;case"Cone":o=new THREE.ConeGeometry(t/2,a/2,n,32,1,!0),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0,c.rotation.x=Math.PI/2;break;case"Cylinder":o=new THREE.CylinderGeometry(t/2,a/2,n,32,1,!0),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0,c.rotation.x=Math.PI/2;break;case"InfoSphere":o=new THREE.SphereGeometry(t,a,n),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break;case"Sphere":o=new THREE.SphereGeometry(t,a,n),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break;case"Tree":var s=new THREE.Tree({generations:3,length:1,uvLength:3,radius:.1,radiusSegments:8,heightSegments:8});o=THREE.TreeGeometry.build(s),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break;case"Bush":o=new THREE.BoxGeometry(t,a,n),r=new THREE.Color("rgb(153,90,0)");default:o=new THREE.BoxGeometry(t,a,n),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break}return c}function le(e,t,a){var n=new THREE.PlaneGeometry(e,t),r=new THREE.MeshStandardMaterial({color:a,side:THREE.DoubleSide}),o=new THREE.Mesh(n,r);return o.receiveShadow=!0,o}function de(e,t){var a=new THREE.DirectionalLight(e,t);return a.castShadow=!0,a.shadow.bias=1e-4,a.shadow.mapSize.width=4096,a.shadow.mapSize.height=4096,a.shadow.camera.left=-1e3,a.shadow.camera.bottom=-1e3,a.shadow.camera.right=1e3,a.shadow.camera.top=1e3,a.shadow.camera.near=.5,a.shadow.camera.far=500,a}function ue(e,t){W.setFromCamera(B,e);var a=[];if(a.length>0){for(var n=0;n<a.length;n++)for(var r=0;r<a[n].object.material.length;r++)a[n].object.material[r].color.setHex(16711680);if(a[0].object!=L.intersectedObject1){if(L.intersectedObject1)if("Array"==L.intersectedObject1.material.constructor.name)for(var o=0;o<L.intersectedObject1.material.length;o++)L.intersectedObject1.material[o].color.setHex(L.intersectedObject1.currentHex);else L.intersectedObject1.material.color.setHex(L.intersectedObject1.currentHex);if(L.intersectedObject1=a[0].object,"Array"==L.intersectedObject1.material.constructor.name){for(var i=0;i<L.intersectedObject1.material.length;i++)L.intersectedObject1.currentHex=L.intersectedObject1.material[i].color.getHex();for(var c=0;c<L.intersectedObject1.material.length;c++)L.intersectedObject1.material[c].color.setHex(14540032)}else L.intersectedObject1.currentHex=L.intersectedObject1.material.color.getHex(),L.intersectedObject1.material.color.setHex(14540032)}}else{if(L.intersectedObject1)if("Array"==L.intersectedObject1.material.constructor.name)for(var s=0;s<L.intersectedObject1.material.length;s++)L.intersectedObject1.material[s].color.setHex(L.intersectedObject1.currentHex);else L.intersectedObject1.material.color.setHex(L.intersectedObject1.currentHex);L.intersectedObject1=null}}function pe(e){B.x=e.clientX/window.innerWidth*2-1,B.y=-e.clientY/window.innerHeight*2+1}function me(e){console.log("event ****************************************",e),e.preventDefault(),B.x=e.clientX/window.innerWidth*2-1,B.y=-e.clientY/window.innerHeight*2+1,console.log("pointer clicked x y",B.x,B.y),F.setFromCamera(B,e.target.camera),console.log("raycaster2",F);var t=F.intersectObjects(e.target.targetList);if(console.log("intersects",t),t.length>0){var a=t[0].object;if(L.intersectedObject2,L.intersectedObject2=a,"structure"===L.intersectedObject2.userData.type&&0==e.button){var n=j.getObjectByName("INFOSPOT: ".concat(L.intersectedObject2.name));n&&(!0===n.visible?n.visible=!1:n.visible=!0)}L.intersectedObject2.children.forEach((function(t){"Object3D"===t.type&&0==e.button&&(!0===t.element.hidden?(t.element.hidden=!1,t.element.style.display="block",t.visible=!0):(t.element.hidden=!0,t.element.style.display="none",t.visible=!1))}))}else L.intersectedObject2,L.intersectedObject2=null}function be(e){var t={};return 0===e.featured_media||(t.featuredObject=e._embedded["wp:featuredmedia"][0],t.imgUrl=t.featuredObject.source_url,t.imgMediumUrl="",t.imgLargeUrl="",t.imgWidth=t.featuredObject.media_details.width,t.imgHeight=t.featuredObject.media_details.height,t.featuredObject.media_details.sizes.hasOwnProperty("large")&&(t.imgWidth=t.featuredObject.media_details.sizes.full.width,t.imgHeight=t.featuredObject.media_details.sizes.full.height,t.imgLargeUrl=t.featuredObject.media_details.sizes.large.source_url+" 1024w, ")),t}Array.prototype.inArray=function(e){for(var t=0;t<this.length;t++)if(e(this[t]))return!0;return!1},Array.prototype.pushIfNotExist=function(e,t){this.inArray(t)||this.push(e)};var he={name:"ThreeDGarden",props:{msg:String,subtitle:String},mounted:function(){new Preloader(C)}};a("6873");const ge=h()(he,[["render",l],["__scopeId","data-v-21a8cf0e"]]);var fe=ge,ve={name:"Participate",components:{ThreeDGarden:fe},data:function(){return{publicPath:"/wp-content/plugins/threed-garden/public"}}};const _e=h()(ve,[["render",o]]);t["default"]=_e},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("f2bf"),r=Object(n["B"])("data-v-40223da1");Object(n["s"])("data-v-40223da1");var o={id:"APP"},i={id:"nav"},c=Object(n["f"])("Home"),s=Object(n["f"])(" | "),l=Object(n["f"])("About"),d=Object(n["f"])(" | "),u=Object(n["f"])("Participate");Object(n["q"])();var p=r((function(e,t){var a=Object(n["v"])("router-link"),p=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["d"])("div",o,[Object(n["g"])("div",i,[Object(n["g"])(a,{to:{name:"home",params:{userId:123}}},{default:r((function(){return[c]})),_:1}),s,Object(n["g"])(a,{to:{name:"about",params:{userId:123}}},{default:r((function(){return[l]})),_:1}),d,Object(n["g"])(a,{to:{name:"participate",params:{userId:123}}},{default:r((function(){return[u]})),_:1})]),Object(n["g"])(p)])})),m=(a("2a84"),a("6b0d")),b=a.n(m);const h={},g=b()(h,[["render",p],["__scopeId","data-v-40223da1"]]);var f=g,v=(a("d3b7"),a("8c4f")),_=Object(n["B"])("data-v-a7917ca0");Object(n["s"])("data-v-a7917ca0");var E={class:"home"};Object(n["q"])();var w=_((function(e,t,a,r,o,i){return Object(n["p"])(),Object(n["d"])("div",E,[Object(n["g"])("img",{src:"".concat(o.publicPath,"/assets/ThreeD-Garden-Logo-Circle-Carrot.png"),alt:"ThreeD Garden => Carrot Logo",width:"70"},null,8,["src"])])})),j={name:"Home",data:function(){return{publicPath:"/wp-content/plugins/threed-garden/public"}}};a("af53");const O=b()(j,[["render",w],["__scopeId","data-v-a7917ca0"]]);var x=O,T={class:"about"},y=Object(n["g"])("h1",null,"About ThreeD Garden",-1);function R(e,t,a,r,o,i){var c=Object(n["v"])("Documentation");return Object(n["p"])(),Object(n["d"])("div",T,[Object(n["g"])("img",{src:"".concat(o.publicPath,"/assets/ThreeD-Garden-Logo-Circle-Carrot.png"),alt:"ThreeD Garden => Carrot Logo",width:"70"},null,8,["src"]),y,Object(n["g"])(c,{msg:"",subtitle:""})])}var S=Object(n["B"])("data-v-394cb411");Object(n["s"])("data-v-394cb411");var H={class:"documentation"},I=Object(n["e"])('<p data-v-394cb411> For a guide on how to configure + customize this project,<br data-v-394cb411> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vue-cli documentation</a>. </p><h3 data-v-394cb411>Installed CLI Plugins</h3><ul data-v-394cb411><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-394cb411>babel</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-394cb411>router</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-394cb411>vuex</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-394cb411>eslint</a></li></ul><h3 data-v-394cb411>Essential Links</h3><ul data-v-394cb411><li data-v-394cb411><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-394cb411>Core Docs</a></li><li data-v-394cb411><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>Forum</a></li><li data-v-394cb411><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>Community Chat</a></li><li data-v-394cb411><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-394cb411>Twitter</a></li><li data-v-394cb411><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>News</a></li></ul><h3 data-v-394cb411>Ecosystem</h3><ul data-v-394cb411><li data-v-394cb411><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vue-router</a></li><li data-v-394cb411><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vuex</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-394cb411>vue-devtools</a></li><li data-v-394cb411><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vue-loader</a></li><li data-v-394cb411><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-394cb411>awesome-vue</a></li></ul>',7);Object(n["q"])();var k=S((function(e,t,a,r,o,i){return Object(n["p"])(),Object(n["d"])("div",H,[Object(n["g"])("h1",null,Object(n["x"])(a.msg),1),Object(n["g"])("h2",null,Object(n["x"])(a.subtitle),1),I])})),M={name:"Documentation",props:{msg:String,subtitle:String}};a("16f4");const D=b()(M,[["render",k],["__scopeId","data-v-394cb411"]]);var P=D,A={name:"About",components:{Documentation:P},data:function(){return{publicPath:"/wp-content/plugins/threed-garden/public"}}};const L=b()(A,[["render",R]]);var C=L,z=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:C},{path:"/participate",name:"participate",component:function(){return Promise.resolve().then(a.bind(null,"3ede"))}}],N=Object(v["a"])({history:Object(v["b"])(),routes:z}),G=N,W=a("5502"),F=Object(W["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(f).use(F).use(G).mount("#app")},6:function(e,t){},6873:function(e,t,a){"use strict";a("1703")},"6ad6":function(e,t,a){},9556:function(e,t,a){"use strict";a("b3f9")},af53:function(e,t,a){"use strict";a("6ad6")},b3f9:function(e,t,a){},d747:function(e,t,a){}});
//# sourceMappingURL=app.js.map