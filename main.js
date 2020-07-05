jQuery(function() {

/*========================================================
スムーススクロール
========================================================*/
// スクロール検知
  jQuery(window).on("scroll", function() {
      // トップから100px以上スクロールしたら
      if (100 < jQuery(this).scrollTop()) {
        // is-showクラスをつける
        jQuery('.totop').addClass( 'is-show' );
      } else {
        // 100pxを下回ったらis-showクラスを削除
        jQuery('.totop').removeClass( 'is-show' );
      }
    });


  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight(); 
    let speed = 600;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません




    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  jQuery('.header-right ul li a').click(function() {
    jQuery('.header-right ul li a').removeClass( 'is-active' );
    jQuery(this).addClass( 'is-active' );
    return false;
  });

/*========================================================
アコーディオン
========================================================*/

  jQuery('.qa-title').click(function () {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.accordion__icon').toggleClass( 'is-open' );
  });

/*========================================================
モーダル
========================================================*/

	// モダール（開く）
		jQuery('.js-modal-open').click(function(e) {
			e.preventDefault();
			let target = jQuery(this).data("target");
      jQuery('.' + target).addClass('is-show');
        
			return false;
    });
    
    	// モダール（閉じる）
		jQuery('.js-modal-close').click(function(e) {
			e.preventDefault();
			let target = jQuery(this).data("target");
      jQuery('.' + target).removeClass('is-show');
        
			return false;
    });

});
