  'use strict';

  var console = window.console || { log: function () {} };
	var cropAvatar;
  function CropAvatar($element) {
    this.$container = $element;

    //this.$avatarView = this.$container.find('.avatar-view');
    //this.$avatar = this.$avatarView.find('img');
    //this.$avatarModal = this.$container.find('#avatar-modal');
    //this.$loading = this.$container.find('.loading');

    this.$avatarForm = this.$container.find('.avatar-form');
    this.$avatarUpload = this.$avatarForm.find('.avatar-upload');
    this.$avatarSrc = this.$avatarForm.find('.avatar-src');
    this.$avatarData = this.$avatarForm.find('.avatar-data');
    this.$avatarInput = this.$avatarForm.find('.avatar-input');
    this.$avatarSave = this.$avatarForm.find('.avatar-save');
    this.$avatarBtns = this.$avatarForm.find('.avatar-btns');

    this.$avatarWrapper = this.$container.find('.avatar-wrapper');
    this.$avatarPreview = this.$container.find('.avatar-preview');

    this.init();
  }

  CropAvatar.prototype = {
    constructor: CropAvatar,

    support: {
      fileList: !!$('<input type="file">').prop('files'),
      blobURLs: !!window.URL && URL.createObjectURL,
      formData: !!window.FormData
    },

    init: function () {
      this.support.datauri = this.support.fileList && this.support.blobURLs;

      this.addListener();
    },

    addListener: function () {
      //this.$avatarView.on('click', $.proxy(this.click, this));
      this.$avatarInput.on('change', $.proxy(this.change, this));
      //this.$avatarForm.on('submit', $.proxy(this.submit, this));
      //this.$avatarBtns.on('click', $.proxy(this.rotate, this));
      this.$avatarSave.on('click',$.proxy(this.confirmCropImg,this));
    },

 	confirmCropImg: function(){
        var corpImg = $(this.$img).cropper('getCroppedCanvas');

        var url = corpImg.toDataURL("image/png");
        $('#corpImg').attr('src',url);
        return url;
    },

  change: function () {
        var files;
        var file;
        var _this = this;

        var preImage = function(url, callback) {
            var image = new Image(); //创建一个Image对象，实现图片的预下载
            image.src = url;

            if (image.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
                callback.call(image);
                return; // 直接返回，不用再处理onload事件
            }

            image.onload = function () { //图片下载完毕时异步调用callback函数。
                callback.call(image);//将回调函数的this替换为Image对象
            };
        };

        if (true) {
              files = this.$avatarInput.prop('files');
              if (files.length <= 0){
                return;
              }

              file = files[0];
              if (!this.isImageFile(file)){
                return;
              }

              if (this.url) {
                    URL.revokeObjectURL(this.url); // Revoke the old one
              }
              var src = (window.URL ? URL : webkitURL).createObjectURL(file);
              var reader = new FileReader();

              reader.onload = function(e) {
                    preImage(src, function () {
                      var imgThis = this;
                      EXIF.getData(file, function() {
                            var zoom = 1;
                            var ori;
                            try{
                                ori = EXIF.getTag(file, 'Orientation'); 
                            }catch(err){
                            }
                            
                            if(ori===undefined){
                               _this.url = src;
                               _this.startCropper(zoom);
                               return;
                            }
                            var canvas = document.getElementById('previewCanvas');
                            var ratio = imgThis.width/imgThis.height;
                            var cw = jQuery(window).width()*3;
                            var ch = cw/ratio;
                            canvas.width = cw;
                            canvas.height = ch;
                            var context = canvas.getContext("2d");

                            var xpos = canvas.width/2;
                            var ypos = canvas.height/2;
                            switch(ori){
                                 case 8:
                                     zoom = 2;
                                     context.translate(xpos, ypos);
                                     context.rotate(-90*Math.PI/180);
                                     context.translate(-xpos, -ypos);
                                     break;
                                 case 3:
                                     zoom = 2;
                                     context.translate(xpos, ypos);
                                     context.rotate(180*Math.PI/180);
                                     context.translate(-xpos, -ypos);
                                     break;
                                 case 6:
                                     zoom = 2;
                                     context.translate(xpos, ypos);
                                     context.rotate(90*Math.PI/180);
                                     context.translate(-xpos, -ypos);
                                     break;
                            }
                            context.drawImage(imgThis,0,0,cw,ch);
                            _this.url = canvas.toDataURL("image/png");
                            _this.startCropper(zoom);
                      });
                    });
              };
              reader.readAsDataURL(file);
        }else {
              file = this.$avatarInput.val();
              if (this.isImageFile(file)) {
                alert('tt');
              }
        }
      },

    syncUpload: function () {
      this.$avatarSave.click();
    },

    isImageFile: function (file) {
      if (file.type) {
        return /^image\/\w+$/.test(file.type);
      } else {
        return /\.(jpg|jpeg|png|gif)$/.test(file);
      }
    },

    startCropper: function (zoom) {
      var _this = this;

      if (this.active) {
        $(this.$img).cropper('replace', this.url);
      } else {
        this.$img = new Image();//$('<img src="' + this.url + '">');
        this.$img.src = this.url;
        this.$avatarWrapper.empty().html(this.$img);

        var screenCw = jQuery(window).width();
        var screenCh = jQuery(window).height();
        var cw = screenCw*zoom;
        var ch = screenCh*zoom;
        var ratio = ratio = this.$img.width / this.$img.height;
        this.$img.onload = function(){
        }
        
        $(this.$img).cropper({
          //aspectRatio:cw/ch,
          //preview: this.$avatarPreview.selector,
          strict: true,
          guides: false,
          highlight: false,
          dragCrop: false,
          cropBoxMovable: false,
          cropBoxResizable: false,
          modal: true,
          background: false,
          //autoCrop:true,
          //autoCropArea: 0.90,
          built: function () {
              // Strict mode: set crop box data first
              $(_this.$img).cropper('zoom', 0.8);
              //$(_this.$img).cropper('setCanvasData', { "left": -(cw-screenCw)/2, "top": 0, "width": cw, "height": cw/ratio });
              $(_this.$img).cropper('setCropBoxData', {"left": 60/2,"top":60/2,"width":screenCw-60,"height":screenCh-60});
          }
        });

        this.active = true;
      }
    },

    alert: function (msg) {
      var $alert = [
            '<div class="alert alert-danger avatar-alert alert-dismissable">',
              '<button type="button" class="close" data-dismiss="alert">&times;</button>',
              msg,
            '</div>'
          ].join('');

      this.$avatarUpload.after($alert);
    }
  };

  $(function () {
    cropAvatar = new CropAvatar($('#crop-avatar'));
  });
