(function($){
  "use strict";
  var WEA = {};
  var plugin_track = 'assets/vendor/';
  $.fn.exists = function () {
        return this.length > 0;
    };

  /* ---------------------------------------------- /*
   * Pre load bootstrapģ��⣺http://www.bootstrapmb.com
  /* ---------------------------------------------- */
  WEA.PreLoad = function() {
    document.getElementById("loading").style.display = "none"; 
  }

    /*--------------------
        * Menu Close
    ----------------------*/
    WEA.MenuClose = function(){
      $('.navbar-nav a').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


  WEA.MenuTogglerClose = function(){
    $(".toggler-menu").on('click', function(){
      $(this).toggleClass('open');
      $('.header-left').stop().toggleClass('menu-open menu-open-desk');
    });
    $('.header-left a').on('click', function() {
     var toggle = $('.toggler-menu').is(':visible');
     if (toggle) {
       $('.header-left').removeClass('menu-open');
       $('.toggler-menu').removeClass('open');
     }
    });
  }

  /* ---------------------------------------------- /*
   * Header Fixed
  /* ---------------------------------------------- */
  WEA.HeaderFixd = function() {
    var HscrollTop  = $(window).scrollTop();  
      if (HscrollTop >= 100) {
         $('body').addClass('fixed-header');
      }
      else {
         $('body').removeClass('fixed-header');
      }
  }


    /*--------------------
    * OwlSlider
    ----------------------*/
    WEA.Owl = function () {
      var owlslider = $("div.owl-carousel");
      if(owlslider.length > 0) {  
         loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
           owlslider.each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;    
           
                $(this).owlCarousel({
                    loop: $loop,
                    items: $items,
                    responsive: {
                      0:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                      480:{items: $this.data('sm-items') ? $this.data('sm-items') : 1},
                      768:{items: $this.data('md-items') ? $this.data('md-items') : 1},
                      980:{items: $this.data('lg-items') ? $this.data('lg-items') : 1},
                      1200:{items: $items}
                    },
                    dots: $navdots,
                    autoplayTimeout:$autospeed,
                    smartSpeed: $smartspeed,
                    autoHeight:$autohgt,
                    center:$CenterSlider,
                    margin:$space,
                    nav: $navarrow,
                    navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
                    autoplay: $autoplay,
                    autoplayHoverPause: true   
                }); 
           }); 
         });
      }
    }

  /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    WEA.Gallery = function() {
      $(document).ready(function () {
        // var example = $('[data-mrc]');
        // example.moreContent({
        //     speed: 800,
        //     height:1200,
        //     shadow: true,
        //     easing: 'easeOutBounce',
        //     textClose: 'View More',
        //     textOpen: 'Hide'
        // });
        // $('.method-controls button').on('click', function () {
        //     var methName = $(this).data('meth');
        //     example.moreContent(methName);
        // });
        var TagsData = []
        TagsData.push({ id: 1, name: "非自回归", screen: "0" })
        TagsData.push({ id: 2, name: "指令跟随", screen: "1" })
        TagsData.push({ id: 3, name: "逻辑推理", screen: "2" })
        TagsData.push({ id: 4, name: "思维链", screen: "3" })
        TagsData.push({ id: 5, name: "代码实践", screen: "4" })
        TagsData.push({ id: 6, name: "开源框架", screen: "5" })
        TagsData.push({ id: 7, name: "高效解码", screen: "6" })
        TagsData.push({ id: 8, name: "综述", screen: "7" })
        TagsData.push({ id: 9, name: "指令压缩", screen: "8" })
        TagsData.push({ id: 10, name: "位置编码", screen: "9" })
        TagsData.push({ id: 11, name: "指令微调", screen: "10" })
        TagsData.push({ id: 12, name: "专家系统", screen: "11" })
        TagsData.push({ id: 13, name: "事实性", screen: "12" })
        TagsData.push({ id: 14, name: "数学", screen: "13" })
        TagsData.push({ id: 15, name: "游戏", screen: "14" })
        TagsData.push({ id: 16, name: "评估", screen: "15" })
        TagsData.push({ id: 17, name: "Agent", screen: "16" })
        TagsData.push({ id: 18, name: "知识编辑", screen: "17" })
        TagsData.push({ id: 19, name: "搜索", screen: "18" })
        TagsData.push({ id: 20, name: "幻觉", screen: "19" })
        TagsData.push({ id: 21, name: "物理", screen: "20" })
        TagsData.push({ id: 22, name: "理解", screen: "21" })
        TagsData.push({ id: 23, name: "对话", screen: "22" })
        TagsData.push({ id: 24, name: "CoT", screen: "23" })
        TagsData.push({ id: 25, name: "多语言", screen: "24" })
        TagsData.push({ id: 26, name: "zero-shot", screen: "25" })
        TagsData.push({ id: 27, name: "多模态", screen: "26" })
        TagsData.push({ id: 28, name: "句法", screen: "27" })
        TagsData.push({ id: 29, name: "对比学习", screen: "28" })
        TagsData.push({ id: 30, name: "标注", screen: "29" })
        TagsData.push({ id: 31, name: "信息抽取", screen: "30" })
        TagsData.push({ id: 32, name: "code", screen: "31" })
        TagsData.push({ id: 33, name: "推理", screen: "32" })
        TagsData.push({ id: 34, name: "ai4science", screen: "33" })
        TagsData.push({ id: 35, name: "知识冲突", screen: "34" })
        TagsData.push({ id: 36, name: "推理加速", screen: "35" })
        TagsData.push({ id: 37, name: "安全", screen: "36" })
        TagsData.push({ id: 38, name: "越狱", screen: "37" })
        TagsData.push({ id: 39, name: "模型加速", screen: "38" })
        TagsData.push({ id: 40, name: "math", screen: "39" })
        TagsData.push({ id: 41, name: "RAG", screen: "40" })
        TagsData.push({ id: 42, name: "上下文学习", screen: "41"})
        TagsData.push({ id: 43, name: "可解释性", screen: "42"})
        TagsData.push({ id: 44, name: "对齐", screen: "43"})
        TagsData.push({ id: 45, name: "数据标注", screen: "44"})
        TagsData.push({ id: 46, name: "NER", screen: "45"})
        TagsData.push({ id: 47, name: "模型微调", screen: "46"})
        TagsData.push({ id: 48, name: "模型编辑", screen: "47"})
        TagsData.push({ id: 49, name: "信息检索", screen: "48"})
        TagsData.push({ id: 50, name: "数据合成", screen: "49"})
        TagsData.push({ id: 51, name: "数据增强", screen: "50"})
        TagsData.push({ id: 52, name: "科研之路", screen: "51"})
        TagsData.push({ id: 53, name: "负责任AI", screen: "52"})
        TagsData.push({ id: 54, name: "论坛", screen: "53"})
        TagsData.push({ id: 55, name: "医疗", screen: "54"})

        $("#tagsInput").sTags({
            data: TagsData,
        })
        $(".search").click(function () {
            var temp = $('.sTags-input');
            var tags = [];//输入的标签
            temp.find('.sTags-new span').each(function() {
            tags.push($(this).text());
            });
            
            var divs = $("div.portfolio-box div.row");
            divs.each(function () {
                var $div = $(this);
                var tagstemp = [];//每一个div的标签
                $div.find('span').each(function() {
                    tagstemp.push($(this).text());
                });
                
                var found = false;//查找标记
                if (tags.length === 0){//如果tags为空，显示全部div内容
                    // found = true;
                    location.reload();
                    setTimeout(() => {
                    location.hash = '#videosSection';
                }, 0);
                }else {
                    for (var i = 0; i < tags.length; i++) {
                        if (tagstemp.includes(tags[i])) {//遍历tags，查找是否和标签有匹配的
                            found = true;
                            break;
                        }
                    }
                }

                if (found) {
                    $div.show();
                } else {
                    $div.hide();
                }
            });
        })
    });
    }

     /*--------------------
    * Masonry
    ----------------------*/
    WEA.masonry = function () {
      var portfolioWork = $('.portfolio-content');
      if ($(".portfolio-content").exists()){
        loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
          if ($(".portfolio-content").exists()){
              $(portfolioWork).isotope({
                resizable: false,
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                filter: '*'
              });
              //Filtering items on portfolio.html
              var portfolioFilter = $('.filter li');
              // filter items on button click
              $(portfolioFilter).on( 'click', function() {
                var filterValue = $(this).attr('data-filter');
                portfolioWork.isotope({ filter: filterValue });
              });
              //Add/remove class on filter list
              $(portfolioFilter).on( 'click', function() {
                $(this).addClass('active').siblings().removeClass('active');
              });
          }
        });
      }
  }

  /*--------------------
        * Progress Bar 
    ----------------------*/
    WEA.ProgressBar = function(){
        $(".skill-bar .skill-bar-in").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
        * particles
    ----------------------*/
    WEA.particles = function() {
      if ($("#particles-box").exists()){
        loadScript(plugin_track + 'particles/particles.min.js', function() {
        });
        loadScript(plugin_track + 'particles/particles-app.js', function() {
        });
      }
    }


    /*--------------------
        * Type It
    ----------------------*/
    WEA.mTypeIt = function() {
      if ($("#type-it").exists()){
            loadScript(plugin_track + 'typeit-master/typeit.js', function() {
                new TypeIt('#type-it', {
                speed: 200,
                loop:true,
                strings: [
                  'NICE go!',

                ],
                breakLines: false
            }); 
          });
        }
    }
    WEA.one_page = function() {
        //var HHeight = $('.navbar').outerHeight();
        var $one_page_nav = $('.one-page-nav');
        if($one_page_nav.length > 0) {
            $one_page_nav.each(function(){
                $.scrollIt({
                  upKey: 38,             // key code to navigate to the next section
                  downKey: 40,           // key code to navigate to the previous section
                  easing: 'linear',      // the easing function for animation
                  scrollTime: 600,       // how long (in ms) the animation takes
                  activeClass: 'active', // class given to the active nav element
                  onPageChange: null,    // function(pageIndex) that is called when page is changed
                  topOffset: -70           // offste (in px) for fixed top navigation
                });
            });
        }
    }

  /* ---------------------------------------------- /*
   * All Functions
  /* ---------------------------------------------- */
    // loadScript
  var _arr  = {};
  function loadScript(scriptName, callback) {
      if (!_arr[scriptName]) {
        _arr[scriptName] = true;
        var body    = document.getElementsByTagName('body')[0];
        var script    = document.createElement('script');
        script.type   = 'text/javascript';
        script.src    = scriptName;
        // WEAn bind WEA event to WEA callback function
        // WEAre are several events for cross browser compatibility
        // script.onreadystatechange = callback;
        script.onload = callback;
        // fire WEA loading
        body.appendChild(script);
      } else if (callback) {
        callback();
      }
  };

  // Window on Load
  $(window).on("load", function(){
    WEA.masonry(),
    WEA.PreLoad();
  });
  // Document on Ready
  $(document).ready(function() {
    WEA.particles(),
    WEA.HeaderFixd(),
    WEA.MenuClose(),
    WEA.MenuTogglerClose(),
    WEA.Gallery(),
    WEA.ProgressBar(),
    WEA.mTypeIt(),
    WEA.one_page(),
    WEA.Owl(),
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
  });

  // Document on Scrool
  $(window).on("scroll", function(){
    WEA.ProgressBar(),
    WEA.HeaderFixd();
  });

  // Window on Resize
  $(window).on("resize", function(){
  });
})(jQuery);