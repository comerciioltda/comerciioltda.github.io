
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.QSVzdYsv.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DDRaF-Pn.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.Dz5Yo4bY.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.BGwaQDtd.js","/cdn/shopifycloud/checkout-web/assets/c1/addresses-is-address-empty.N5gKDF4P.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-ProgressIntercepts.CqnOjgmw.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-updaters-helpers.BdLDFSL-.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-shop-theme.BFYBXhUf.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.QqC3OUMy.js","/cdn/shopifycloud/checkout-web/assets/c1/mobile-checkout-sdk-MobileCheckoutSdkClient.yNYuftne.js","/cdn/shopifycloud/checkout-web/assets/c1/apple-pay-errors.D4CxR27F.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.B27Vqvv5.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.0Kk53Fp-.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-report-graphql-error.C71urdf1.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.C-XtTxg_.js","/cdn/shopifycloud/checkout-web/assets/c1/context-CheckoutSheetProtocolClient.Cn9nfFTc.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.CbWt-C4E.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.B2H9iaaN.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.zrF2ioa_.js","/cdn/shopifycloud/checkout-web/assets/c1/constants.DwKLdMBC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory.Dg1Em3_8.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.DAoK3wOt.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.DRK61jWx.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.CMZyee9m.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.B6EfXrY2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealCustomization.GId501qH.js","/cdn/shopifycloud/checkout-web/assets/c1/models-ShopPayBuyerDetails.model.BpDJrvYU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.DyndjQKR.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.B6QF1MC-.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.LUPruvSX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.GwCTpUbM.js","/cdn/shopifycloud/checkout-web/assets/c1/localization-index.CocROQmd.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.bOLk1dYZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.D81i2upZ.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.Br_QhxJl.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.Rvr1b5Fs.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox.JgpsNlxa.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.DggY_U6V.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.D_OGytp7.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.ngcGFNTt.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DnMdFIgS.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module.CMuFH1U4.js","/cdn/shopifycloud/checkout-web/assets/c1/Monorail-monorailMetric-wallets.C9u60NMF.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-monorail.BbsGTxon.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.-CfuyBjs.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge.CwTy6e2t.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-grouping.DtpHqqPa.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.NvWTO5Vv.js","/cdn/shopifycloud/checkout-web/assets/c1/TransitionHeight.CyJTH5fa.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.BRUuFK24.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.CnYVlKtY.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.9i4Ba85J.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation.CeMzRAh9.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.5pTpOSIn.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.pRZ8izIQ.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride.DvMgN0Ax.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.CDzpNnM8.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.5Nrfvmez.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.DPb-c0eO.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.Vzzs9gjj.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.Dz61E90m.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.zZz7nCF1.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module.DgyUsOcH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.CTrsouEM.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.D-jISWQ2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.DjVtvDXq.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.ChimiiSx.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.LDmntVFc.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.BvWh2Ydv.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.BVjLPkI3.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.DVd_NK7s.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.1d7eeNgb.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.j5j66_je.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.WM3Lag_J.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.BGkj8fhu.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DMFwdJew.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.aL5_SVQD.js","/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent.C0Qwl7qO.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha.ujSgPlZT.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha.C30zqI2e.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.oMciqIsx.js","/cdn/shopifycloud/checkout-web/assets/c1/components-PaymentMethodProgressionHost.C3nxO9oX.js","/cdn/shopifycloud/checkout-web/assets/c1/stopwatch.TAjeB1Lz.js","/cdn/shopifycloud/checkout-web/assets/c1/component-MobileOrderSummary.CwhFXE9P.js","/cdn/shopifycloud/checkout-web/assets/c1/styles-floating-layer.module.nMBTWXiU.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.YJWhXuj1.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.BIuy2uX7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops.cFnklGoN.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.ryHxfRuF.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector.BipkcKqa.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.B2JGCxlw.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.-B-x1Ko0.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.Sxsz5knT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/is-address-empty.DJksNKpk.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/previous.CuwOYYrp.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.BPR3LV8c.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useAddressMutationsWithNegotiation.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.aPApdPe_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/IncentiveBadge.Dlnp55te.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CmuzzmSI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.C8No5WOn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BwQxlzN-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Checkbox.SrYMuQu4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/floating-layer.DfWUBaTh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  