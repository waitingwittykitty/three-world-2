(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;o.push([1,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t,a){e.exports=a("56d7")},"16f4":function(e,t,a){"use strict";a("d747")},"1f23":function(e,t,a){},2:function(e,t){},"2a84":function(e,t,a){"use strict";a("30a1")},3:function(e,t){},"30a1":function(e,t,a){},"3ede":function(e,t,a){"use strict";a.r(t);var n=a("f2bf"),r={class:"participate"};function o(e,t,a,o,i,c){var s=Object(n["w"])("ThreeDGarden");return Object(n["q"])(),Object(n["d"])("div",r,[Object(n["h"])(s,{msg:"",subtitle:""})])}var i=function(e){return Object(n["t"])("data-v-3766c47a"),e=e(),Object(n["r"])(),e},c={class:"threedgarden"},s=i((function(){return Object(n["e"])("div",{id:"webgl"},null,-1)}));function l(e,t,a,r,o,i){return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",c,[Object(n["e"])("h1",null,Object(n["y"])(a.msg),1),Object(n["e"])("h2",null,Object(n["y"])(a.subtitle),1)]),s],64)}a("b85c");var d=a("2909");a("99af"),a("dca8"),a("a4d3"),a("e01a"),a("d3b7"),a("b0c0"),a("159b"),a("820e"),a("3ca3"),a("ddb0"),a("d81d"),a("e9c4"),a("38cf"),a("2ca0"),a("4de4"),a("9911"),a("a9e3"),a("cb29"),a("1913"),a("498a"),a("a15b");var u=a("e6a9"),p="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ1bmtub3duIiwic3ViIjoxNTI2NywiaWF0IjoxNjM2NjU3ODUxLCJqdGkiOiIwNTBiMzIxNC02NzcxLTRlYzktODhmMS02NTVhYWVhNWQzN2QiLCJpc3MiOiIvL215LmZhcm0uYm90OjQ0MyIsImV4cCI6MTY0MTg0MTg1MSwibXF0dCI6ImNsZXZlci1vY3RvcHVzLnJtcS5jbG91ZGFtcXAuY29tIiwiYm90IjoiZGV2aWNlXzE1Mjk3Iiwidmhvc3QiOiJ4aWNvbmZ1bSIsIm1xdHRfd3MiOiJ3c3M6Ly9jbGV2ZXItb2N0b3B1cy5ybXEuY2xvdWRhbXFwLmNvbTo0NDMvd3MvbXF0dCJ9.K8jzw-l_KduohGUgS_rkmNx4700XQyZX3-JCigk-5gXf4y-aemDNemzABGpIvULVj9D02RXEiLAzPtSxRpGS_AWpwd0OSU35HNO_pCL7-KLmtmpanAOxutflPe9KN_stU1AgZC42TmMYLYeMZY1ornQOZTaIgT6dYJkqJex7HV6D1LS-1yjvEdPM2E1UTh6OWUFDndq-fdwyVNuQfYdbu0CLhTua3SaNaXCueZ7qew3-XVUx48PS2X8XFACkveZbRfb55qgabT-WpcQB4KyujdKFbAotZqJeZ1_aCxTa4WT_y_zFV7gVptgeK2FAXC1DE9cH4FJXipt0AMPksQGShA",m=new u["Farmbot"]({token:p});m.connect().then((function(){return m.setConfig("MARTY","HEY HEY HEY"),console.log(m.getConfig("MARTY")),m.getConfig("MARTY")})).then((function(){return m.moveRelative({x:1,y:2,z:3,speed:100})})),console.log("bot",m);a("9556");var b=a("6b0d"),h=a.n(b);Detector.webgl||Detector.addGetWebGLMessage();var f=window.postdata;console.log("postdata",f);var g=f.plugin_name,v=f.plugin_version,E=f.plugin_url,_=(f.theme_uri,f.rest_url),w=f.world_id;console.log("pluginName",g,v);var j,O,x,T,y=!1;T=new dat.GUI({autoPlace:!0,closeOnTop:!0}),T.close(),T.domElement.id="gui";var R,S,H,I=T.addFolder("Rotation + Animation"),k=T.addFolder("Camera Position"),M=T.addFolder("Directional Light"),D=(T.addFolder("Allotments"),T.addFolder("Beds"),T.addFolder("Plants"),T.addFolder("Annotations"),T.addFolder("Character")),P={action:"Idle"};P.actionTime=Date.now();var A={},L=["Breathing Idle","Driving","Idle","Left Turn","Pointing","Pointing Gesture"];L=[].concat(Object(d["a"])(L),["Right Turn","Running","Talking","Turn","Walking","Walking Backwards"]);var C={modes:Object.freeze({NONE:Symbol("none"),PRELOAD:Symbol("preload"),INITIALISING:Symbol("initialising"),CREATING_LEVEL:Symbol("creating_level"),ACTIVE:Symbol("active"),GAMEOVER:Symbol("gameover")}),ANIMATE:!1,assetsPath:"".concat(E,"assets/"),data:{world:[{id:w}],scene:[],allotment:[],bed:[],plant:[],planting_plan:[]},intersectedObject1:null,intersectedObject2:null,colliders:[],environment:{},farmhouse:{}};C.mode=C.modes.NONE,I.add(C,"ANIMATE").name("Run Animation");SFX.supportsAudioType("mp3");var z={assets:["".concat(C.assetsPath,"fbx/environment.fbx"),"".concat(C.assetsPath,"fbx/girl-walk.fbx"),"".concat(C.assetsPath,"fbx/usb.fbx")],oncomplete:function(){Q()}};L.forEach((function(e){z.assets.push("".concat(C.assetsPath,"fbx/anims2/").concat(e,".fbx"))})),C.mode=C.modes.PRELOAD,console.log("params",C),console.log("options",z);var N=new THREE.FBXLoader,G=new THREE.TextureLoader,W=new THREE.Clock,F=new THREE.Raycaster,X=new THREE.Raycaster,V=new THREE.Vector2,B="".concat(_,"scene/?_embed&per_page=100"),J="".concat(_,"allotment/?_embed&per_page=100"),Y="".concat(_,"bed/?_embed&per_page=100"),Z="".concat(_,"planting_plan/?_embed&per_page=100"),q="".concat(_,"plant/?_embed&per_page=100"),U=[B,J,Y,Z,q];function Q(){console.log("init ************************************");var e=!0;if(localStorage&&e&&!y){var t=localStorage.getItem("threedgarden"),a=JSON.parse(t);void 0!=a?(console.log("LOCALSTORAGE ITEM RETRIEVED",a),C.data=a.data):(console.log("LOCALSTORAGE ITEM NOT RETRIEVED",a),e=!1)}else console.log("LOCALSTORAGE NOT AVAILABLE"),e=!1;e?$():Promise.allSettled(U.map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e[0].type;switch(t){case"scene":C.data.scene=Object(d["a"])(e);break;case"allotment":C.data.allotment=Object(d["a"])(e);break;case"bed":C.data.bed=Object(d["a"])(e);break;case"plant":C.data.plant=Object(d["a"])(e);break;case"planting_plan":C.data.planting_plan=Object(d["a"])(e);break;default:break}console.log("data",e)}))}))).then((function(e){console.log("results",e),e.forEach((function(e,t){e.status,"rejected"==e.status&&console.log(e)})),console.log("params.data",C.data),localStorage.setItem("threedgarden",JSON.stringify(C)),$()})),window.addEventListener("resize",K,!1)}function K(){O.aspect=window.innerWidth/window.innerHeight,O.updateProjectionMatrix(),R.setSize(window.innerWidth,window.innerHeight)}function $(){console.log("params.data.scene",C.data.scene);var e=C.data.scene[0],t=e.id;if(j=new THREE.Scene,j.name="ThreeD Garden",console.log("scene",j),e.acf.scene_background_image_px){var a=[e.acf.scene_background_image_px,e.acf.scene_background_image_nx,e.acf.scene_background_image_py,e.acf.scene_background_image_ny,e.acf.scene_background_image_pz,e.acf.scene_background_image_nz],n=(new THREE.CubeTextureLoader).load(a);n.format=THREE.RGBFormat,j.background=n}else if(e.acf.scene_background_image)var r=G.load(e.acf.scene_background_image,(function(){var e=new THREE.WebGLCubeRenderTarget(r.image.height);e.fromEquirectangularTexture(R,r),j.background=e}));else e.acf.scene_background_color&&(j.background=new THREE.Color(e.acf.scene_background_color));var o=de(e.acf.scene_plane_width_x,e.acf.scene_plane_length_y,e.acf.scene_plane_background_color);if(o.name="plane-jane",o.rotation.x=-Math.PI/2,I.add(o.rotation,"x",-Math.PI,Math.PI).listen(),I.add(o.rotation,"y",-Math.PI,Math.PI).listen(),I.add(o.rotation,"z",-Math.PI,Math.PI).listen(),e.acf.scene_plane_texture_image){o.material.roughness=0,o.material.map=G.load(e.acf.scene_plane_texture_image);var i=o.material.map;i.wrapS=THREE.RepeatWrapping,i.wrapT=THREE.RepeatWrapping,i.repeat.set(4,4)}var c=ue(16777215,1.6);c.position.set(-90,-120,120),c.castShadow=!0,c.intensity=1.6;var s=new THREE.CameraHelper(c.shadow.camera);s.visible=!1;var l=ue(16777215,.7);l.position.set(90,120,120),l.castShadow=!1,l.intensity=1;var d=new THREE.CameraHelper(l.shadow.camera);d.visible=!0,M.add(s,"visible",0,20).name("Show Light Helper"),M.add(c,"intensity",0,20),M.add(c.position,"x",-500,500),M.add(c.position,"y",-500,500),M.add(c.position,"z",-500,500),M.add(d,"visible",0,20).name("Show Light 2 Helper"),M.add(l,"intensity",0,20),M.add(l.position,"x",-500,500),M.add(l.position,"y",-500,500),M.add(l.position,"z",-500,500),o.add(c),o.add(l),j.add(s),j.add(d),j.add(o),O=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,.1,1e3),O.name="gardencam1",O.position.set(86,64,182);var u=new THREE.CameraHelper(O);u.visible=!1,j.add(u),k.add(u,"visible",0,20).name("Show Camera Helper"),k.add(O.position,"x",-500,500).listen(),k.add(O.position,"y",-500,500).listen(),k.add(O.position,"z",-500,500).listen(),R=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),R.shadowMap.enabled=!0,R.setSize(window.innerWidth-100,window.innerHeight-140),R.domElement.camera=O,R.domElement.targetList=o.children,R.domElement.addEventListener("pointermove",me,!1),R.domElement.addEventListener("pointerdown",be,!1),x=new THREE.OrbitControls(O,R.domElement),x.enableDamping=!0,x.dampingFactor=.25,x.enableZoom=!0,x.rotateSpeed=.5,x.autoRotate=!1,x.autoRotateSpeed=.03,x.minDistance=.01,x.maxDistance=340,x.maxPolarAngle=Math.PI/2-.04,x.target=new THREE.Vector3(0,0,0),R.domElement.controls=x,S=document.querySelector("#webgl"),S.append(T.domElement),S.append(R.domElement),H=R.domElement,ie(C.data.allotment,o,t),N.load("".concat(C.assetsPath,"characters/SK_Chr_Farmer_Male_01.fbx"),(function(e){e.mixer=new THREE.AnimationMixer(e),P.mixer=e.mixer,P.root=e.mixer.getRoot(),e.name="Gardener",e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!1)})),G.load("".concat(C.assetsPath,"textures/PolygonFarm_Texture_01_B.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.map=t)}))})),P.object=new THREE.Object3D,P.object.add(e),P.object.scale.set(.033,.033,.033),P.object.rotation.x=Math.PI/2,o.add(P.object),D.add(P.object,"visible").name("Show Character").listen()})),ne(o),oe(o),re(o);var p=new JoyStick({onMove:ae,game:S});console.log("joystick",p);var m=function e(){var t=W.getDelta();if(pe(O,o.children),x.update(),TWEEN.update(),requestAnimationFrame(e),C.ANIMATE&&(o.rotation.z-=7e-4),void 0!==P.mixer&&P.mixer.update(t),"Walking"==P.action){var a=Date.now()-P.actionTime;a>2e3&&P.move.forward}if(void 0!==P.move&&te(t),void 0!=P.cameras&&void 0!=P.cameras.active){O.position.lerp(P.cameras.active.getWorldPosition(new THREE.Vector3),.05);var n=P.object.position.clone();n.y+=200,O.lookAt(n)}R.render(j,O)},b=function e(t){var a=L.pop();t.load("".concat(C.assetsPath,"fbx/anims2/").concat(a,".fbx"),(function(n){A[a]=n.animations[0],L.length>0?e(t):(L=[],ee("Idle"),m())}))};b(N)}function ee(e){var t=P.mixer.clipAction(A[e]);t.time=0,console.log("PLAYER: action",t),P.mixer.stopAllAction(),P.action=e,P.actionTime=Date.now(),t.play()}function te(e){var t=P.object.position.clone();t.y+=60;var a=new THREE.Vector3;P.object.getWorldDirection(a),P.move.forward<0&&a.negate();new THREE.Raycaster(t,a);var n=!1;C.colliders;if(!n)if(P.move.forward>0){var r="Running"==P.action?24:8;P.object.translateZ(e*r)}else P.move.forward<0&&P.object.translateZ(2*-e);P.object.rotateY(P.move.turn*e)}function ae(e,t){t=-t,e>.2?"Walking"!=P.action&&"Running"!=P.action&&ee("Walking"):e<-.2?"Walking Backwards"!=P.action&&ee("Walking Backwards"):(e=0,Math.abs(t)>.05?"Left Turn"!=P.action&&ee("Left Turn"):"Idle"!=P.action&&ee("Idle")),P.move={forward:e,turn:t}}function ne(e){N.load("".concat(C.assetsPath,"fbx/Building_Farm_House_02.fbx"),(function(e){C.farmhouse=e,C.colliders=[],e.rotation.y=Math.PI/180*270,e.position.set(0,0,100),e.scale.set(2.2,2.2,2.2),j.add(e),e.traverse((function(e){e.isMesh&&(e.name.startsWith("proxy")?(C.colliders.push(e),e.material.visible=!1):(e.castShadow=!0,e.receiveShadow=!0))})),G.load("".concat(C.assetsPath,"textures/SimpleFarm.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.map=t)}))}))}))}function re(e){N.load("".concat(C.assetsPath,"fbx/Prop_Chicken_Coop_02.fbx"),(function(e){C.farmhouse=e,C.colliders=[],e.rotation.y=Math.PI/180*90,e.position.set(80,0,-10),e.scale.set(2.2,2.2,2.2),j.add(e),e.traverse((function(e){e.isMesh&&(e.name.startsWith("proxy")?(C.colliders.push(e),e.material.visible=!1):(e.castShadow=!0,e.receiveShadow=!0))})),G.load("".concat(C.assetsPath,"textures/SimpleFarm.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.map=t)}))}))}))}function oe(e){var t,a=8,n=-45,r=0,o=-138,i=20,c=new Promise((function(e,c){for(t=1;t<=a;t++)N.load("".concat(C.assetsPath,"fbx/SM_Env_Road_Gravel_Straight_01.fbx"),(function(e){e.position.set(n,0,o),n+=r,o+=i,console.log("ROAD A startX, startZ",n,o),e.scale.set(.02,.01,.02),e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),G.load("".concat(C.assetsPath,"textures/PolygonFarm_Texture_03_A.png"),(function(t){e.traverse((function(e){e.isMesh&&(e.material.transparent=!0,e.material.opacity=.7,e.material.map=t)}))})),j.add(e)}));e(n,o)}));c.then((function(e,a){for(t=1;t<=1;t++)N.load("".concat(C.assetsPath,"fbx/SM_Env_Road_Gravel_T_Section_01.fbx"),(function(t){console.log("ROAD T startX, startZ",e,a),t.position.set(e,0,a),e+=r,a+=i,console.log("ROAD T startX, startZ",e,a),t.scale.set(.02,.01,.02),t.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),G.load("".concat(C.assetsPath,"textures/PolygonFarm_Texture_03_A.png"),(function(e){t.traverse((function(t){t.isMesh&&(t.material.transparent=!0,t.material.opacity=.7,t.material.map=e)}))})),j.add(t)}))}))}function ie(e,t,a){console.log("ALLOTMENTS",e);var n=e.filter((function(e){return e.acf.allotment_scene==a}));n.forEach((function(e){var a={parameters:{},position:{},images:{}};a.parameters.x=parseInt(e.acf.allotment_width),a.parameters.y=parseInt(e.acf.allotment_length),a.parameters.z=parseInt(e.acf.allotment_height),a.position.x=parseInt(e.acf.allotment_position_x),a.position.y=parseInt(e.acf.allotment_position_y),a.position.z=parseInt(e.acf.allotment_position_z),a.images.texture=e.acf.allotment_texture_image,a.images.featured=he(e),a.shape=e.acf.allotment_shape,a.color=e.acf.allotment_color,a.title=e.title.rendered,a.postID=e.id,a.description=e.content.rendered,a.link=e.link;var n=le(a.shape,a.parameters.x,a.parameters.y,a.parameters.z,a.color);if(n.name=a.title,n.userData.type="structure",n.userData.postID=a.postID,n.userData.description=a.description,n.userData.annotation=a.title,n.userData.link=a.link,n.position.x=a.position.x,n.position.y=a.position.y,n.position.z=n.geometry.parameters.depth/2+a.position.z,n.material.roughness=.9,null!=a.images.texture&&0!=a.images.texture){n.material.map=G.load(a.images.texture);for(var r=0;r<n.material.length;r++){n.material[r].map=G.load(a.images.texture);var o=n.material[r].map;o.wrapS=THREE.RepeatWrapping,o.wrapT=THREE.RepeatWrapping,o.repeat.set(4,4)}}t.add(n),ce(C.data.bed,t,a.postID,n.position.x,n.position.y,0)}))}function ce(e,t,a,n,r,o){var i=e.filter((function(e){return e.acf.bed_allotment==a}));i.forEach((function(e){var a={parameters:{},position:{},images:{}};a.parameters.x=parseInt(e.acf.bed_width)/12,a.parameters.y=parseInt(e.acf.bed_length)/12,a.parameters.z=parseInt(e.acf.bed_height)/12,a.position.x=parseInt(e.acf.bed_position_x)/12+n,a.position.y=parseInt(e.acf.bed_position_y)/12+r,a.position.z=parseInt(e.acf.bed_position_z)/12+a.parameters.z/2,a.images.texture=e.acf.bed_texture_image,a.images.featured=he(e),a.shape=e.acf.bed_shape,a.color=e.acf.bed_color,a.title=e.title.rendered,a.postID=e.id,a.description=e.content.rendered,a.link=e.link;var o=le(a.shape,a.parameters.x,a.parameters.y,a.parameters.z,a.color);if(o.name=a.title,o.userData.type="structure",o.userData.postID=a.postID,o.userData.description=a.description,o.userData.annotation=a.title,o.userData.link=a.link,o.position.x=a.position.x?a.position.x:0,o.position.y=a.position.y?a.position.y:0,o.position.z=a.position.z?a.position.z:0,o.material.roughness=.9,null!=a.images.texture&&0!=a.images.texture){o.material.map=G.load(a.images.texture);for(var i=0;i<o.material.length;i++){o.material[i].map=G.load(a.images.texture);var c=o.material[i].map;c.wrapS=THREE.RepeatWrapping,c.wrapT=THREE.RepeatWrapping,c.repeat.set(4,4)}}t.add(o),C.colliders.push(o),se(C.data.planting_plan,t,a.postID,o.position.x,o.position.y,0)}))}function se(e,t,a,n,r,o){var i=[],c=[];e.forEach((function(e){e.acf.planting_plan_bed_plant_schedule.forEach((function(t){t.planting_plan_bed==a&&c.pushIfNotExist(e,(function(t){return t.id===e.id}))})),i=[].concat(c)})),i.length>0&&console.log("filteredPostObject",i),i.forEach((function(e){e.acf.planting_plan_bed_plant_schedule.forEach((function(o){if(o.planting_plan_bed==a){var i=C.data.plant.filter((function(e){return e.id==o.planting_plan_plant}));i.forEach((function(a){var i={parameters:{},position:{},images:{}};i.parameters.x=Number(a.acf.plant_width)/12,i.parameters.y=Number(a.acf.plant_length)/12,i.parameters.z=Number(a.acf.plant_height)/12,i.position.x=parseInt(o.plant_position_x)/12+n,i.position.y=parseInt(o.plant_position_y)/12+r,i.position.z=parseInt(o.plant_position_z)/12+i.parameters.z/2,i.images.texture=a.acf.plant_texture_image,i.images.featured=he(e),i.shape=a.acf.plant_shape,i.color=a.acf.plant_color,i.title=a.title.rendered,i.postID=a.id,i.description=a.content.rendered,i.link=a.link,console.log("PLANT",i);var c=le(i.shape,i.parameters.x,i.parameters.y,i.parameters.z,i.color);if(c.name=i.title,c.userData.type="structure",c.userData.postID=i.postID,c.userData.description=i.description,c.userData.annotation=i.title,c.userData.link=i.link,c.position.x=i.position.x?i.position.x:0,c.position.y=i.position.y?i.position.y:0,c.position.z=i.position.z?i.position.z:0,c.rotation.x=Math.PI/2,c.material.roughness=.9,null!=i.images.texture&&0!=i.images.texture){c.material.map=G.load(i.images.texture);for(var s=0;s<c.material.length;s++){c.material[s].map=G.load(i.images.texture);var l=c.material[s].map;l.wrapS=THREE.RepeatWrapping,l.wrapT=THREE.RepeatWrapping,l.repeat.set(4,4)}}console.log("plant structure",c),t.add(c),C.colliders.push(c)}))}}))}))}function le(e,t,a,n,r){var o,i,c;switch(e){case"Box":o=new THREE.BoxGeometry(t,a,n),i=new THREE.MeshStandardMaterial({transparent:!0,opacity:.8,color:r,side:THREE.DoubleSide,depthWrite:!0}),c=new THREE.Mesh(o,[i,i,i,i]),c.castShadow=!0;break;case"Cone":o=new THREE.ConeGeometry(t/2,a/2,n,32,1,!0),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0,c.rotation.x=Math.PI/2;break;case"Cylinder":o=new THREE.CylinderGeometry(t/2,a/2,n,32,1,!0),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0,c.rotation.x=Math.PI/2;break;case"InfoSphere":o=new THREE.SphereGeometry(t,a,n),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break;case"Sphere":o=new THREE.SphereGeometry(t,a,n),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break;case"Tree":var s=new THREE.Tree({generations:3,length:1,uvLength:3,radius:.1,radiusSegments:8,heightSegments:8});o=THREE.TreeGeometry.build(s),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break;case"Bush":o=new THREE.BoxGeometry(t,a,n),r=new THREE.Color("rgb(153,90,0)");default:o=new THREE.BoxGeometry(t,a,n),i=new THREE.MeshStandardMaterial({color:r,side:THREE.DoubleSide}),c=new THREE.Mesh(o,i),c.castShadow=!0;break}return c}function de(e,t,a){var n=new THREE.PlaneGeometry(e,t),r=new THREE.MeshStandardMaterial({color:a,side:THREE.DoubleSide}),o=new THREE.Mesh(n,r);return o.receiveShadow=!0,o}function ue(e,t){var a=new THREE.DirectionalLight(e,t);return a.castShadow=!0,a.shadow.bias=1e-4,a.shadow.mapSize.width=4096,a.shadow.mapSize.height=4096,a.shadow.camera.left=-1e3,a.shadow.camera.bottom=-1e3,a.shadow.camera.right=1e3,a.shadow.camera.top=1e3,a.shadow.camera.near=.5,a.shadow.camera.far=500,a}function pe(e,t){F.setFromCamera(V,e);var a=[];try{a=F.intersectObjects(t,!0)}catch(c){a=[]}if(a.length>0){if(a[0].object!=C.intersectedObject1){if(C.intersectedObject1)if("Array"==C.intersectedObject1.material.constructor.name)for(var n=0;n<C.intersectedObject1.material.length;n++)C.intersectedObject1.material[n].color.setHex(C.intersectedObject1.currentHex);else C.intersectedObject1.material.color.setHex(C.intersectedObject1.currentHex);if(C.intersectedObject1=a[0].object,"Array"==C.intersectedObject1.material.constructor.name){for(var r=0;r<C.intersectedObject1.material.length;r++)C.intersectedObject1.currentHex=C.intersectedObject1.material[r].color.getHex();for(var o=0;o<C.intersectedObject1.material.length;o++)C.intersectedObject1.material[o].color.setHex(14540032)}else C.intersectedObject1.currentHex=C.intersectedObject1.material.color.getHex(),C.intersectedObject1.material.color.setHex(14540032)}}else{if(C.intersectedObject1)if("Array"==C.intersectedObject1.material.constructor.name)for(var i=0;i<C.intersectedObject1.material.length;i++)C.intersectedObject1.material[i].color.setHex(C.intersectedObject1.currentHex);else C.intersectedObject1.material.color.setHex(C.intersectedObject1.currentHex);C.intersectedObject1=null}}function me(e){V.x=e.offsetX/H.clientWidth*2-1,V.y=-e.offsetY/H.clientHeight*2+1}function be(e){console.log("event ****************************************",e),e.preventDefault(),V.x=e.clientX/window.innerWidth*2-1,V.y=-e.clientY/window.innerHeight*2+1,console.log("pointer clicked x y",V.x,V.y),X.setFromCamera(V,e.target.camera),console.log("raycaster2",X);var t=X.intersectObjects(e.target.targetList);if(console.log("intersects",t),t.length>0){var a=t[0].object;if(C.intersectedObject2,C.intersectedObject2=a,"structure"===C.intersectedObject2.userData.type&&0==e.button){var n=j.getObjectByName("INFOSPOT: ".concat(C.intersectedObject2.name));n&&(!0===n.visible?n.visible=!1:n.visible=!0)}C.intersectedObject2.children.forEach((function(t){"Object3D"===t.type&&0==e.button&&(!0===t.element.hidden?(t.element.hidden=!1,t.element.style.display="block",t.visible=!0):(t.element.hidden=!0,t.element.style.display="none",t.visible=!1))}))}else C.intersectedObject2,C.intersectedObject2=null}function he(e){var t={};return 0===e.featured_media||(t.featuredObject=e._embedded["wp:featuredmedia"][0],t.imgUrl=t.featuredObject.source_url,t.imgMediumUrl="",t.imgLargeUrl="",t.imgWidth=t.featuredObject.media_details.width,t.imgHeight=t.featuredObject.media_details.height,t.featuredObject.media_details.sizes.hasOwnProperty("large")&&(t.imgWidth=t.featuredObject.media_details.sizes.full.width,t.imgHeight=t.featuredObject.media_details.sizes.full.height,t.imgLargeUrl=t.featuredObject.media_details.sizes.large.source_url+" 1024w, ")),t}Array.prototype.inArray=function(e){for(var t=0;t<this.length;t++)if(e(this[t]))return!0;return!1},Array.prototype.pushIfNotExist=function(e,t){this.inArray(t)||this.push(e)};var fe={name:"ThreeDGarden",props:{msg:String,subtitle:String},mounted:function(){new Preloader(z)}};a("8556");const ge=h()(fe,[["render",l],["__scopeId","data-v-3766c47a"]]);var ve=ge,Ee={name:"Participate",components:{ThreeDGarden:ve},data:function(){return{publicPath:"/wp-content/plugins/threed-garden/public"}}};const _e=h()(Ee,[["render",o]]);t["default"]=_e},4:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("f2bf"),r={id:"APP"},o={id:"nav"},i=Object(n["g"])("Home"),c=Object(n["g"])(" | "),s=Object(n["g"])("About"),l=Object(n["g"])(" | "),d=Object(n["g"])("Participate");function u(e,t){var a=Object(n["w"])("router-link"),u=Object(n["w"])("router-view");return Object(n["q"])(),Object(n["d"])("div",r,[Object(n["e"])("div",o,[Object(n["h"])(a,{to:{name:"home",params:{userId:123}}},{default:Object(n["B"])((function(){return[i]})),_:1}),c,Object(n["h"])(a,{to:{name:"about",params:{userId:123}}},{default:Object(n["B"])((function(){return[s]})),_:1}),l,Object(n["h"])(a,{to:{name:"participate",params:{userId:123}}},{default:Object(n["B"])((function(){return[d]})),_:1})]),Object(n["h"])(u)])}a("2a84");var p=a("6b0d"),m=a.n(p);const b={},h=m()(b,[["render",u],["__scopeId","data-v-40223da1"]]);var f=h,g=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),v={class:"home"},E=["src"];function _(e,t,a,r,o,i){return Object(n["q"])(),Object(n["d"])("div",v,[Object(n["e"])("img",{src:"".concat(o.publicPath,"/assets/ThreeD-Garden-Logo-Circle-Carrot.png"),alt:"ThreeD Garden => Carrot Logo",width:"70"},null,8,E)])}var w={name:"Home",data:function(){return{publicPath:"/wp-content/plugins/threed-garden/public"}}};a("af53");const j=m()(w,[["render",_],["__scopeId","data-v-a7917ca0"]]);var O=j,x={class:"about"},T=["src"],y=Object(n["e"])("h1",null,"About ThreeD Garden",-1);function R(e,t,a,r,o,i){var c=Object(n["w"])("Documentation");return Object(n["q"])(),Object(n["d"])("div",x,[Object(n["e"])("img",{src:"".concat(o.publicPath,"/assets/ThreeD-Garden-Logo-Circle-Carrot.png"),alt:"ThreeD Garden => Carrot Logo",width:"70"},null,8,T),y,Object(n["h"])(c,{msg:"",subtitle:""})])}var S={class:"documentation"},H=Object(n["f"])('<p data-v-394cb411> For a guide on how to configure + customize this project,<br data-v-394cb411> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vue-cli documentation</a>. </p><h3 data-v-394cb411>Installed CLI Plugins</h3><ul data-v-394cb411><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-394cb411>babel</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-394cb411>router</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-394cb411>vuex</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-394cb411>eslint</a></li></ul><h3 data-v-394cb411>Essential Links</h3><ul data-v-394cb411><li data-v-394cb411><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-394cb411>Core Docs</a></li><li data-v-394cb411><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>Forum</a></li><li data-v-394cb411><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>Community Chat</a></li><li data-v-394cb411><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-394cb411>Twitter</a></li><li data-v-394cb411><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>News</a></li></ul><h3 data-v-394cb411>Ecosystem</h3><ul data-v-394cb411><li data-v-394cb411><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vue-router</a></li><li data-v-394cb411><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vuex</a></li><li data-v-394cb411><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-394cb411>vue-devtools</a></li><li data-v-394cb411><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-394cb411>vue-loader</a></li><li data-v-394cb411><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-394cb411>awesome-vue</a></li></ul>',7);function I(e,t,a,r,o,i){return Object(n["q"])(),Object(n["d"])("div",S,[Object(n["e"])("h1",null,Object(n["y"])(a.msg),1),Object(n["e"])("h2",null,Object(n["y"])(a.subtitle),1),H])}var k={name:"Documentation",props:{msg:String,subtitle:String}};a("16f4");const M=m()(k,[["render",I],["__scopeId","data-v-394cb411"]]);var D=M,P={name:"About",components:{Documentation:D},data:function(){return{publicPath:"/wp-content/plugins/threed-garden/public"}}};const A=m()(P,[["render",R]]);var L=A,C=[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:L},{path:"/participate",name:"participate",component:function(){return Promise.resolve().then(a.bind(null,"3ede"))}}],z=Object(g["a"])({history:Object(g["b"])(),routes:C}),N=z,G=a("5502"),W=Object(G["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(f).use(W).use(N).mount("#app")},"6ad6":function(e,t,a){},8556:function(e,t,a){"use strict";a("1f23")},9556:function(e,t,a){"use strict";a("b3f9")},af53:function(e,t,a){"use strict";a("6ad6")},b3f9:function(e,t,a){},d747:function(e,t,a){}});
//# sourceMappingURL=app.js.map