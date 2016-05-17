$(function(){
	

	   /*禁止默认拖动事件*/
	  document.ontouchmove = function(event){
		event.preventDefault();
	  };
	    
//	alert($(window).width()+'-----'+$(window).height());
	
	    function styleJs(){
			var pingKuan=jQuery(".m_wrapper").width(),//m_wrapper是最外层div的类名
				bili = function(mun){
					var oScale = mun/640;	//750是psd宽度
					return oScale.toFixed(6);
				};
				
		
			//例子
			jQuery(".iBg").css({
				"width":pingKuan * bili(240)	//240是在480宽度的psd中的width		
			});
			

		
			//样式重置完成之后
	       setTimeout(function(){
	       		jQuery(".load").hide();
				jQuery(".m_wrapper").css({
					"opacity": 1
				});
	       },500);
		
			/*进度条加载完成*/
            jQuery('.jd').text(100+'%');
			

			
			/*pages*/
			jQuery(".xz_ren,.gq_ren,.fgx").css({
				"width":pingKuan * bili(640),
				"height":pingKuan * bili(711),
				"top":pingKuan * bili(245)
		   });
			
			
           jQuery(".xz_ren,.gq_ren,.fgx").css({
				"width":pingKuan * bili(640),
				"height":pingKuan * bili(711),
				"top":pingKuan * bili(245)
		   });
			
		   jQuery(".ershi").css({
				"width":pingKuan * bili(196),
				"height":pingKuan * bili(27),
				"top":pingKuan * bili(741),
				"left":pingKuan * bili(43)
		   });
			
		   jQuery(".slc").css({
				"width":pingKuan * bili(198),
				"height":pingKuan * bili(19),
				"top":pingKuan * bili(774),
				"left":pingKuan * bili(43)
		   });
			
			
		   jQuery(".sishi").css({
				"width":pingKuan * bili(196),
				"height":pingKuan * bili(24),
				"top":pingKuan * bili(654),
				"right":pingKuan * bili(43)
		   });	
			
		     jQuery(".qr").css({
				"width":pingKuan * bili(199),
				"height":pingKuan * bili(18),
				"top":pingKuan * bili(684),
				"right":pingKuan * bili(42)
		   });		
         
           jQuery(".title").css({
				"width":"100%",
				"height":"auto",
				"top":pingKuan * bili(57)
		   });	
          
          
            jQuery(".title_small").css({
				"width":"100%",
				"height":"auto",
				"top":pingKuan * bili(202)
		   });	
          
              jQuery(".hsjs").css({
				"width":pingKuan * bili(217),
				"height":pingKuan * bili(36),
				"bottom":pingKuan * bili(70)
		   });	
              jQuery(".hsjs_gai").css({
				"height":pingKuan * bili(600)
		   });
          
          
             jQuery(".bro_t1").css({
				"top":pingKuan * bili(64)
		   });
		   
		        jQuery(".bro_t2").css({
				"top":pingKuan * bili(182)
		   });
          
                  jQuery(".bro_t3").css({
				"top":pingKuan * bili(835)
		   });
          
          
                 jQuery(".danr_t1").css({
				"top":pingKuan * bili(703)
		   });
          
          
                    jQuery(".danr_t2").css({
				"top":pingKuan * bili(763)
		   });
          
          
                     jQuery(".diybut").css({
				"bottom":pingKuan * bili(248),
				"width":pingKuan * bili(387),
				"height":pingKuan * bili(114)
		   });
          
   
           jQuery(".index20").css({
				"top":pingKuan * bili(103),
				"left":pingKuan * bili(25),
				"width":pingKuan * bili(81),
				"height":pingKuan * bili(37)
		   });
            
           jQuery(".index20t").css({
				"top":pingKuan * bili(113),
				"left":pingKuan * bili(76),
				"width":pingKuan * bili(227),
				"height":pingKuan * bili(61)
		   });
           jQuery(".index45").css({
				"top":pingKuan * bili(103),
				"right":pingKuan * bili(218),
				"width":pingKuan * bili(82),
				"height":pingKuan * bili(37)
		   });
            
           jQuery(".index45t").css({
				"top":pingKuan * bili(113),
				"left":pingKuan * bili(340),
				"width":pingKuan * bili(258),
				"height":pingKuan * bili(61)
		   });
   
   
            jQuery('.indexbottom').css({
				"width":pingKuan * bili(521),
				"height":pingKuan * bili(17),
				"bottom":pingKuan * bili(198)
		   });
   
           jQuery('.djzz').css({
           	    "position":"absolute",
				"width":pingKuan * bili(153),
				"height":pingKuan * bili(153),
				"left":pingKuan * bili(449),
				"top":pingKuan * bili(170)
		   });
   
   
         jQuery('.djzz2').css({
           	    "position":"absolute",
				"width":pingKuan * bili(153),
				"height":pingKuan * bili(153),
				"left":pingKuan * bili(72),
				"top":pingKuan * bili(136)
		   });
		   
		   
		     jQuery('.djzz3').css({
           	    "position":"absolute",
				"width":pingKuan * bili(153),
				"height":pingKuan * bili(153),
				"left":pingKuan * bili(66),
				"top":pingKuan * bili(78)
		   });
           
           
           
            jQuery('.left_icon').css({
				"width":pingKuan * bili(28),
				"height":pingKuan * bili(64),
				"left":pingKuan * bili(13)
		   });
		   
		   jQuery('.right_icon').css({
				"width":pingKuan * bili(28),
				"height":pingKuan * bili(65),
				"right":pingKuan * bili(13)
		   });
           
           
           jQuery('.leftgai').css({
           	    "width":pingKuan * bili(100),
           	    "height":pingKuan * bili(150),
           	    "left":pingKuan * bili(13)
           });
           
           jQuery('.rightgai').css({
           	    "width":pingKuan * bili(100),
           	    "height":pingKuan * bili(150),
           	    "right":pingKuan * bili(13)
           });
           
           
           jQuery('.zzytop').css({
           	    "top":pingKuan * bili(48)
           });
           
             jQuery('.zzytop2').css({
           	    "top":pingKuan * bili(48)
           });
           
           
           
           jQuery('.cropit-image-input').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(175),
           	    "height":pingKuan * bili(170),
           	    "left":pingKuan * bili(36),
           	    "top":pingKuan * bili(102),
           	    "opacity":0,
           	    "z-index":260
           });
           
//         jQuery('.cropit-image-preview').css({
//         	    "position":"absolute",
//         	    "width":"100%",
//         	    "height":"100%",
//         	    "left":0,
//         	    "top":0,
//         	    "z-index":260,
//         	    "background":'red'
//         });
           
           
           
           jQuery('.tztp').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(162),
           	    "height":pingKuan * bili(51),
           	    "left":pingKuan * bili(246),
           	    "top":pingKuan * bili(151),
           	    "opacity":0,
           	    "z-index":9999999
           });
           
            jQuery('.hyz').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(162),
           	    "height":pingKuan * bili(51),
           	    "left":pingKuan * bili(246),
           	    "top":pingKuan * bili(225),
           	    "opacity":0,
           	    "z-index":9999999
           });
           
              jQuery('.ws').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(50),
           	    "height":pingKuan * bili(24),
           	    "left":pingKuan * bili(37),
           	    "top":pingKuan * bili(389)
           });
           
            jQuery('.name').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(137),
           	    "height":pingKuan * bili(35),
           	    "left":pingKuan * bili(93),
           	    "top":pingKuan * bili(384),
           	    "line-height":pingKuan * bili(35)+'px'
           });
           
            jQuery('.age1').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(57),
           	    "height":pingKuan * bili(35),
           	    "left":pingKuan * bili(37),
           	    "top":pingKuan * bili(451),
           	    "line-height":pingKuan * bili(35)+'px'
           });
           
             jQuery('.age2').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(57),
           	    "height":pingKuan * bili(35),
           	    "left":pingKuan * bili(37),
           	    "top":pingKuan * bili(520),
           	    "line-height":pingKuan * bili(35)+'px'
           });
           
           jQuery('.sui').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(39),
           	    "height":pingKuan * bili(23),
           	    "left":pingKuan * bili(100),
           	    "top":pingKuan * bili(458)
           });
           
           jQuery('.sui2').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(39),
           	    "height":pingKuan * bili(23),
           	    "left":pingKuan * bili(100),
           	    "top":pingKuan * bili(528)
           });
           
            jQuery('.text1').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(448),
           	    "height":pingKuan * bili(35),
           	    "left":pingKuan * bili(148),
           	    "top":pingKuan * bili(451),
           	    "line-height":pingKuan * bili(36)+'px'
           });
           
           jQuery('.text2').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(448),
           	    "height":pingKuan * bili(35),
           	    "left":pingKuan * bili(148),
           	    "top":pingKuan * bili(520),
           	    "line-height":pingKuan * bili(36)+'px'
           });
           
           
           jQuery('.inputbutton').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(570),
           	    "height":pingKuan * bili(45),
           	    "left":pingKuan * bili(37),
           	    "top":pingKuan * bili(582),
           	    "line-height":pingKuan * bili(48)+'px'
           });
           
           jQuery('.textbottom').css({
           	    "top":pingKuan * bili(660)
           });
           
           
           jQuery('.schb').css({
           	    "position":"absolute",
           	    "width":pingKuan * bili(269),
           	    "height":pingKuan * bili(120),
           	    "top":pingKuan * bili(856),
           	    "line-height":pingKuan * bili(48)+'px'
           });
           
           
           jQuery('.textheng').css({
           	    "width":pingKuan * bili(557),
           	    "height":pingKuan * bili(76),
           	    "line-height":pingKuan * bili(76)+'px',
           	    "margin-bottom":pingKuan * bili(25)
           });
           
            jQuery('.textheng1').css({
           	    "margin-top":pingKuan * bili(61)
           });
           
             jQuery('.textheng1').css({
           	    "margin-top":pingKuan * bili(61)
           });
           
            jQuery('.qd').css({
           	    "width":pingKuan * bili(209),
           	    "height":pingKuan * bili(67),
           	    "top":pingKuan * bili(845),
           	    "line-height":pingKuan * bili(48)+'px'
           });
           
           
           
           jQuery('.hbsc').css({
           	    "width":pingKuan * bili(278),
           	    "height":pingKuan * bili(133),
           	    "top":pingKuan * bili(850)
           });
           
           
       
         	     	 jQuery('.cropper-view-box').css({
         	    "left":"-50%",
         	    "top":"-50%",
           	    "width":jQuery(window).width()+'px',
           	    "height":jQuery(window).height()+'px'
           });
  
      
           
           jQuery('#avatarInput,.lsimg').css({
         	    "left":pingKuan * bili(38),
         	    "top":pingKuan * bili(100),
           	    "width":pingKuan * bili(174),
           	    "height":pingKuan * bili(164),
           	    "opacity":"0"
           });
           
           
               jQuery('#avatarInput').css({
         	    "left":pingKuan * bili(38),
         	    "top":pingKuan * bili(100),
           	    "width":pingKuan * bili(174),
           	    "height":pingKuan * bili(164),
           	    "opacity":"0"
           });
           
           jQuery('.lan_sy').css({
         	    "right":pingKuan * bili(76),
         	    "top":pingKuan * bili(531),
           	    "width":pingKuan * bili(486),
           	    "height":pingKuan * bili(327)
           });
           
            jQuery('.jin_sy,.fen_sy').css({
         	    "right":pingKuan * bili(76),
         	    "top":pingKuan * bili(531),
           	    "width":pingKuan * bili(486),
           	    "height":pingKuan * bili(327)
           });
           
           
           
           jQuery('.cjqd').css({
           	    "psoition":"absolute",
         	    "bottom":pingKuan * bili(0),
         	    "height":pingKuan * bili(128),
           	    "width":pingKuan * bili(640),
           	    "z-index":999999999
           });
           
           
           
       
           jQuery('.container').css({
         	    "top":pingKuan * bili(0),
         	    "height":pingKuan * bili(320),
           	    "width":pingKuan * bili(640),
           });
         
          
              jQuery('.xtsimg').css({
         	    "top":pingKuan * bili(50),
         	    "height":pingKuan * bili(911),
           	    "width":pingKuan * bili(640),
           });
   
   
           jQuery('.xstpass').css({
         	    "top":pingKuan * bili(30),
         	    "right":pingKuan * bili(0),
         	    "height":pingKuan * bili(131),
           	    "width":pingKuan * bili(197),
           });
           
   
   
           /*首页动效开始*/
           setTimeout(function(){
           	jQuery('.index20').addClass('indeximg_in');
           },1000);
   
            setTimeout(function(){
           	jQuery('.index20t').addClass('indeximg_in');
           },1800);
           
           
           setTimeout(function(){
           	jQuery('.index45').addClass('indeximg_in');
           },3500);
   
            setTimeout(function(){
           	jQuery('.index45t').addClass('indeximg_in');
           },4000);
           
            setTimeout(function(){
           	jQuery('.indexbottom').addClass('indeximg_in2');
           },4800);
   
   
           /*非首页动效开始*/
           setTimeout(function(){
           	jQuery('.gbl').addClass('gb_out');
           },500);
//        
//         setTimeout(function(){
//         	jQuery('.ershi').addClass('ershitrans_in');
//         },1000);
//         
//         setTimeout(function(){
//         	jQuery('.slc').addClass('ershitrans_in2');
//         },1800);
//         
           setTimeout(function(){
           	jQuery('.gbr').addClass('gb_out');
           },3000);
//        
//	       setTimeout(function(){
//         	jQuery('.sishi').addClass('sishitrans_in');
//         },3500);
//         
//         setTimeout(function(){
//         	jQuery('.qr').addClass('sishitrans_in2');
//         },4000);
//	    
//	       setTimeout(function(){
//         	jQuery('.titletrans').addClass('titletrans_in');
//         },5500);
//	    
//	    
//	       setTimeout(function(){
//         	jQuery('.title_small').addClass('title_smalltrans_in');
//         },6000);
//	    
//	       
	       setTimeout(function(){
	       	jQuery('.hsjs').show();
	       	jQuery('.hsjs_gai').show(); 
	       	    setInterval(function(){
	       		setTimeout(function(){
			       	jQuery('.shd').hide();
			       	jQuery('.shd1').show();
			       },150);
			       
			            setTimeout(function(){
			       	jQuery('.shd').hide();
			       	jQuery('.shd2').show();
			       },300);
			 
			      setTimeout(function(){
			       	jQuery('.shd').hide();
			       	jQuery('.shd3').show();
			       },450);
			 
			      setTimeout(function(){
			       	jQuery('.shd').hide();
			       	jQuery('.shd4').show();
			       },600);
			 
			      setTimeout(function(){
			       	jQuery('.shd').hide();
			       	jQuery('.shd5').show();
			       },750);
			       
			            setTimeout(function(){
			       	jQuery('.shd').hide();
			       	jQuery('.shd6').show();
			       },900);
			 
			      setTimeout(function(){
			       	jQuery('.shd').hide();
			       	jQuery('.shd7').show();
			       },1050);
			       
	       	},1200);
	       },6000);
	       
	       
	    
	    
//        alert($(window).width()+'--'+$(window).height());
          
	    
	    



	    
	    
	    
	    
	    
	    }
			
			
			

		function loaded(){
			setTimeout(function(){styleJs();},300);
		}
		function hengshuping(){
			if(window.orientation==180||window.orientation==0){loaded();};
			if(window.orientation==90||window.orientation==-90){loaded();}
		}
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
		window.addEventListener('load', loaded, false);



});




