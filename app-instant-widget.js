var isABTestEnabled = true;
var promiseABVersion = "A";
var isInternational = 0;
var edd_displayed = "";
var edd_days = 0;
var isPromiseViewed = false;
var globalAuthToken = "";
var globalSellerDetails = "";
var globalCheckActiveDetails = "";
var trackingGAId = "G-XC7PYWS9EK";
var is_whitelabeling_enabled =  false
var hideSovaURLs = [
  "gut-microbiome-test",
  "guthealconsult",
  "fix-acidity-gutheal21",
  "gut-x-bloating",
  "gut-x-constipation",
  "gut-x-ibs",
  "sova-gutheal",
  "plug-the-flow-synbiotic-supplement-for-diarrhoea-ibs-relief",
  "one-swift-motion-supplement-for-constipation-relief",
  "metabolic-fuel-synbiotic-supplement",
  "fat-loss-support",
];
var widgetTypeMap = {
  edd: "promise-product-page",
  promise_feature: "promise-company-features",
};
var badge_list = {
  1: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-1.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-1-dark.svg",
    key: "delivery_guaranteed",
    text: "Delivery Guaranteed",
  },
  2: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-2.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-2-dark.svg",
    key: "secure_transactions",
    text: "Secure Transaction",
  },
  5: {
    key: "easy_order_tracking",
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-4.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-4-dark.svg",
    text: "Easy Order Tracking",
  },
  3: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-5.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-5-dark.svg",
    key: "five_star",
    text: "5 Star Rated",
  },
  4: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-3.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-3-dark.svg",
    key: "refund_return",
    text: "Easy {{X}} Days Return",
  },
  6: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-6.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-6-dark.svg",
    key: "india_first",
    text: "India's First {{Y}}",
  },
  7: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-7.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-7-dark.svg",
    key: "india_first",
    text: "X Year warranty",
  },
  8: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-8.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-8-dark.svg",
    key: "india_first",
    text: "Pay on Delivery",
  },
  9: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-10.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-10-dark.svg",
    key: "india_first",
    text: "Free Delivery",
  },
  10: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-9.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-9-dark.svg",
    key: "india_first",
    text: "Installation available on request",
  },
  11: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-11.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-11-dark.svg",
    key: "india_first",
    text: "Eco friendly product",
  },
  12: {
    icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-12.svg",
    dark_icon: "https://sr-cdn.shiprocket.in/sr-promise/images/feature-12-dark.svg",
    key: "india_first",
    text: "Best selling product",
  },
};
var sellerEmail = document.currentScript.src
  .split("?")[1]
  .split("&")
  .reduce(
    (obj, pair) => ((obj[pair.split("=")[0]] = pair.split("=")[1]), obj),
    {}
  )["uuid"];

var isPreviewRequest = document.currentScript.src
  .split("?")[1]
  .split("&")
  .reduce(
    (obj, pair) => ((obj[pair.split("=")[0]] = pair.split("=")[1]), obj),
    {}
  )["preview"];

if (isPreviewRequest == 1) {
  isPreviewRequest = true;
} else {
  isPreviewRequest = false;
}
const promisePopUpContent = {
  delivery_guaranteed: {
    title: "Delivery Guaranteed",
    content: `We deliver most of our orders within the promised delivery days. In some cases, it can take more time than usual. Please sign up on <a href='http://my.shiprocket.in/' style='color: blue;text-decoration: underline;font-size: 14px;font-weight: 400;'>myShiprocket App</a> to track the order.`,
  },
  secure_transactions: {
    title: "Secure Transactions",
    content: "Shiprocket approved safe and secure payment guaranteed.",
  },
  refund_return: {
    title: "{{X}} Days Easy Return & Refund",
    content:
      "Return/Exchange request for refunds are accepted only for unused products which have defects or in case of damages during delivery, missing or wrong product delivered. Return/Exchange request can be placed within {{X}} days of delivery from <a href='http://my.shiprocket.in/' style='color: blue;text-decoration: underline;font-size: 14px;font-weight: 400;'>myShiprocket App</a>",
  },
  easy_order_tracking: {
    title: "Easy Order Tracking",
    content:
      "You will receive a real time Whatsapp message on every order movement. You can also track your order from <a href='http://my.shiprocket.in/' style='color: blue;text-decoration: underline;font-size: 14px;font-weight: 400;'>myShiprocket App</a>",
  },
  default: {
    title: "Shiprocket Verified Seller",
    content: `<div class="promise-flexbox" style="margin: 21px 0px;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/tick-pointer.png" style="height: 15px;
    margin-right: 12px;width: auto;"/> <div>{{happy_customers}} Happy Customers.</div></div>
   <div class="promise-flexbox" style="margin: 21px 0px;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/tick-pointer.png" style="height: 15px;width: auto;
    margin-right: 12px;"/> <div>{{successful_shipments}} Successful Shipments.</div></div>
   <div class="promise-flexbox" style="margin: 21px 0px;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/tick-pointer.png" style="height: 15px;width: auto;
    margin-right: 12px;"/> <div>{{years}} Years of Expertise.</div></div>`,
  },
  five_star: {
    title: "Shiprocket Verified Seller",
    content: `Join the ranks of delighted customers who have experienced the best with this exceptional product.`,
  },
};

if (localStorage.getItem("_p_version_theme__")) {
  promiseABVersion = localStorage.getItem("_p_version_theme__");
} else {
  let randomValue =
    isABTestEnabled === false ? 1 : Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  if (randomValue == 1) {
    promiseABVersion = "A";
    localStorage.setItem("_p_version_theme__", "A");
  }
  // } else if(randomValue >= 4 && randomValue <= 6) {
  //   promiseABVersion = "B";
  //   localStorage.setItem("_p_version_theme__", "B");
  // } else {
  else {
    promiseABVersion = "B";
    localStorage.setItem("_p_version_theme__", "B");
  }
}

function setLocalStorageItem(key, value) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, value);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

if (!sellerEmail) sellerEmail = document.currentScript.src.split("?")[1];
//var promiseApiUrl = "https://sr-promise-qa-1.kartrocket.com";
var promiseApiUrl = "https://promise.shiprocket.in";
async function getPromiseClarityId() {
  const authToken = globalAuthToken
    ? globalAuthToken
    : localStorage.getItem("_p_token") &&
      new Date().getTime() <
        JSON.parse(localStorage.getItem("_p_token"))?.expirationTime
    ? JSON.parse(localStorage.getItem("_p_token"))?.value
    : await getSellerAuthToken(sellerEmail);
  globalAuthToken = authToken;
  const sellerDetails = globalSellerDetails
    ? globalSellerDetails
    : localStorage.getItem("_p_buzz_info") &&
      new Date().getTime() <
        JSON.parse(localStorage.getItem("_p_buzz_info"))?.expirationTime
    ? JSON.parse(localStorage.getItem("_p_buzz_info"))?.value
    : await getPromiseSellerDetails(authToken);
  globalSellerDetails = sellerDetails;
  const clarityId = sellerDetails?.promise_company_stats?.clarity_id;
  return clarityId;
}
// getPromiseClarityId().then((data) => {
//   if (data) addPromiseClarityScript(data);
// }).then(()=>{
//   clarity("set", "ABtheme", promiseABVersion );
// })
function handleSessionAndAtcData(authToken){
  let lastSessionCookie = JSON.parse(
    localStorage.getItem("_promise_session_atc_")
  )?.shopify_session
    ? JSON.parse(localStorage.getItem("_promise_session_atc_"))?.shopify_session
    : "";
  let lastCartCookie = JSON.parse(localStorage.getItem("_promise_session_atc_"))
    ?.atc_session
    ? JSON.parse(localStorage.getItem("_promise_session_atc_"))?.atc_session
    : "";

  setInterval(() => {
    const currentSessionCookie = getCookie("_shopify_s");
    const currentCartCookie = decodeURIComponent(getCookie("cart"))?.split('?key=')[0];

    // if (currentSessionCookie !== lastSessionCookie) {
    //   setLocalStorageItem("_promise_session_atc_", JSON.stringify({shopify_session:currentSessionCookie, atc_session:currentCartCookie}))
    //    makeAPIRequest(`${promiseApiUrl}/api/v1/shopify/track/shopify/session`,authToken, "POST", JSON.stringify({session_id:currentSessionCookie, add_to_cart_token:currentCartCookie}))
    //     lastSessionCookie = currentSessionCookie;
    // }

    if (currentCartCookie !== lastCartCookie) {
      setLocalStorageItem(
        "_promise_session_atc_",
        JSON.stringify({
          shopify_session: currentSessionCookie,
          atc_session: currentCartCookie,
        })
      );
      if (
        /^\/(?:products|collections\/[^/]+\/products)\/[^/]+/.test(
          window.location.pathname
        )
      ) {
        makeAPIRequest(
          `${promiseApiUrl}/api/v1/shopify/track/shopify/session`,
          authToken,
          "POST",
          JSON.stringify({
            session_id: currentSessionCookie,
            add_to_cart_token: currentCartCookie,
          })
        );
        lastSessionCookie = currentSessionCookie;
        lastCartCookie = currentCartCookie;
      }
    }
  }, 1000); // Check every second
}

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}
function addPromiseClarityScript(clarityId) {
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", clarityId);
}

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
const scriptElement = document.createElement("script");
document.head.appendChild(scriptElement);
scriptElement.async = true;
scriptElement.src =
  "https://www.googletagmanager.com/gtag/js?id=" + trackingGAId;

scriptElement.onload = () => {
  gtag("js", new Date());
  gtag("config", trackingGAId);
};
async function callGAEvent(eventName, eventData) {
  gtag("event", eventName, {
    ...eventData,
    send_to: trackingGAId,
    //cid           :  globalCheckActiveDetails?.data?.[0]?.cid,
    //brand_name    :  globalCheckActiveDetails?.data?.[0]?.info?.brand_name,
    edd: edd_displayed,
    version: promiseABVersion,
    international: isInternational,
    edd_tat: edd_days,
    theme: promiseABVersion === "A" ? "2" : "1",
  });
}

function GaPromiseLogoClicked() {
  callGAEvent("Clicked on Promise logo", {});
}
function gaPromiseBannerClicked() {
  callGAEvent("Clicked on Promise Banner", {});
}
var promiseImgUrl =
  "https://kr-shipmultichannel-mum.s3.ap-south-1.amazonaws.com/promise/static/";

//var netlifyImgURl = "https://snazzy-dango-b155c3.netlify.app/"

function startWidgetInteraction() {
  return new Date().getTime();
}

function endWidgetInteraction(startTime) {
  const endTime = new Date().getTime();
  const timeSpent = endTime - startTime;
  callGAEvent("promise_widget_interaction", {
    time_spent: timeSpent,
  });
  if (!isPromiseViewed) {
    callGAEvent("Promise widget Viewed", {});
    isPromiseViewed = true;
  }
}

async function makeAPIRequest(url, token, method, body) {
  // to make api calls and if auth is expired or invalid, will generate the auth token again and will make the api call again
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await fetch(url, {
      method,
      headers,
      ...(body && { body }),
    });
    const data = await response.json();
    if (data?.errors[0]?.message === "Token Signature could not be verified.") {
      const newToken = await getSellerAuthToken(sellerEmail);
      return makeAPIRequest(url, newToken, method, body);
    }
    `    `;
    return data;
  } catch (error) {
    console.error("Error:", error);
    // Handle error as needed
  }
}

async function getSellerAuthToken(email) {
  const data = {
    uuid: email,
  };
  try {
    const response = await fetch(
      `${promiseApiUrl}/api/v1/shopify/seller/auth`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const authData = await response.json();
    if (authData?.data[0]?.token) {
      const authDetails = {
        value: authData?.data[0]?.token,
        expirationTime: new Date().getTime() + 86400000,
      };
      await setLocalStorageItem("_p_token", JSON.stringify(authDetails));
    }

    return authData?.data[0]?.token;
  } catch (e) {
    return undefined;
  }
}
function getPromiseNumberOfDays(d_date) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const inputDate = new Date(d_date);

  const timeDifferenceMs = inputDate - currentDate;
  const daysLeft = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));
  return daysLeft;
}
function getDateFourDaysLater() {
  const today = new Date();
  const futureDate = new Date(today.setDate(today.getDate() + 4));

  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = futureDate.toLocaleDateString("en-US", options);

  return formattedDate;
}
async function getServicibilityDetails(authToken, buyerPincode, is_manual) {
  let data = {}
  try{ 
    data = {
    delivery_postcode: buyerPincode,
    cod: "0",
    weight: "0.1", // Added check for Girveda
    sku : ShopifyAnalytics.meta.product.variants[0].sku || "",
    product_id : ShopifyAnalytics.meta.product.id.toString() || "",
    session_id : getCookie("_shopify_s") || "",
    atc_token : decodeURIComponent(getCookie("cart"))?.split('?key=')[0] || "",
    company_id : document.getElementById("zopcompanyId")?.innerText || undefined
  };
  }
  catch(e){
    data = {
      delivery_postcode: buyerPincode,
      cod: "0",
      weight: "0.1", // Added check for Girveda
      company_id : document.getElementById("zopcompanyId")?.innerText || undefined
    };
  }
  const apiloadTime = is_manual ? 25000 : 2000;
  const response = await Promise.race([
    makeAPIRequest(
      `${promiseApiUrl}/api/v1/shopify/seller/serviceability`,
      authToken,
      "POST",
      JSON.stringify(data)
    ),
    new Promise((resolve) => setTimeout(() => resolve("404"), apiloadTime)),
  ]);
  if (response === "404") {
    const responseData = {
      data: [
        {
          data: {
            available_courier_companies: [
              {
                cod: 0,
                etd: getDateFourDaysLater(),
              },
            ],
          },
          postcode_info: { city: "" },
        },
      ],
    };
    return responseData;
  } else {
    return response;
  }
}
async function getPromiseSellerDetails(token) {
  const response = await makeAPIRequest(
    `${promiseApiUrl}/api/v1/shopify/seller/stats`,
    token,
    "GET",
    ""
  );
  const sellerDetails = response;
  if (sellerDetails?.data[0]) {
    const sellerData = {
      value: sellerDetails?.data[0],
      expirationTime: new Date().getTime() + 86400000,
    };
    await setLocalStorageItem("_p_buzz_info", JSON.stringify(sellerData));
  }
  return sellerDetails?.data[0];
}
async function getPromiseSystemIP() {
  const response = await Promise.race([
    fetch("https://pro.ip-api.com/json/?key=I1yEhXr3bbNUGGA"),
    new Promise((resolve) => setTimeout(() => resolve("404"), 3000)),
  ]);
  if (response === "404") {
    return false;
  } else {
    const ipInfo = await response.json();
    if (ipInfo.query === "14.194.36.134") ipInfo.zip = "122008";

    if (ipInfo.countryCode && ipInfo.countryCode != "IN") {
      isInternational = 1;
      ipInfo.zip = "122008";
      // removePromiseWidgets();
    }
    return ipInfo;
  }
}
function removePromiseWidgets() {
  if (document.querySelectorAll(".promise-product-page")) {
    const orderDetails = document.querySelectorAll(".promise-product-page");
    orderDetails.forEach((image) => {
      image.innerHTML = "";
    });
  }
  if (document.getElementById("promise-head-banner"))
    document.getElementById("promise-head-banner").innerHTML = "";
}
async function getPromiseIPPincodeDetails(ip, token) {
  const response = await makeAPIRequest(
    `${promiseApiUrl}/api/v1/shopify/seller/user/location`,
    token,
    "POST",
    JSON.stringify({ ip })
  );
  const IPPincodeDetails = response;
  return IPPincodeDetails?.data[0]?.postcode;
}
function renderHeadJSCode() {
  const headJsCode = `<div class="promise-custom-header" >
  <img src="${promiseImgUrl}sr-promise.png" style="height:24px;vertical-align: baseline;width: auto;" height="24" />
  <div style="font-size:11px; color: #2C1566;margin: 0px 11px; line-height: 13px;"> <img src="${promiseImgUrl}five-star.png" style="height:10px;width: auto;vertical-align: baseline;"height="10"/><div>Complete Purchase Protection</div></div>
  <div onclick="openPromisePopup('banner')" style="font-size:12px; display: flex;margin-top: 7px;    cursor: pointer;"><div style="padding-bottom: 0px; color:#2C1566;
    border-bottom: 1px dashed #2C1566; white-space: nowrap;">Know more</div><img src="${promiseImgUrl}know-more.png" style="height: 12px;width: auto;vertical-align: baseline;
    margin-left: 4px; margin-top:2px"/> </div>
    </div> `;
  if (document.getElementById("promise-head-banner") && promiseABVersion != "C")
    document.getElementById("promise-head-banner").innerHTML = headJsCode;
}
function applyStylesBasedOnWidth() {
  const myDiv = document.getElementById("promise-tag-box");
  if (myDiv) {
    const divWidth = myDiv.offsetWidth;
    const myClasses = document.getElementsByClassName("pro-tag-box-small");
    const myTextClasses = document.getElementsByClassName("pro-features-text");
    if (divWidth > 480) {
      //  document.getElementsByClassName("pro-web-text")[0].classList.add('text-17-px')
      for (let i = 0; i < myClasses.length; i++) {
        myClasses[i].classList.add("promise-width-large");
        myTextClasses[i].classList.add("mg-10-px");
      }
    } else {
      //  document.getElementsByClassName("pro-web-text")[0].classList.remove('text-17-px')
      for (let i = 0; i < myClasses.length; i++) {
        myClasses[i].classList.remove("promise-width-large");
        myTextClasses[i].classList.remove("mg-10-px");
      }
    }
  }
}

function moveToPromiseEDD() {
  callGAEvent("Clicked on Check EDD Sticky Icon", {});
  var element = document.getElementById("PromiseEddSection");
  var offset =
    window.innerHeight / 2 - element.getBoundingClientRect().height / 2;

  // Scroll to the element with the calculated offset
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}
function scrollBadges(){
  document.getElementById('promise-badges-scroll').scrollLeft += 320;
}
function renderPromisePageWithShimmer() {
  if (promiseABVersion === "A") {
    const PDPjsCode = `  <div class="promise-pdp-page" id="PromiseEddSection" style="    font-family: Arial, Helvetica, sans-serif !important;
  letter-spacing: 0px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: none;
  background: transparent;
  font-weight: 400;
  text-align: initial;color: #313652;">
          <hr style="border: 1px solid #f7f7f7; margin: 0px;" />
          <div id="sr-icon">
          <div class="shine shimmer-lines"></div>
          </div>
          <div id="delivery-msg">
          <div class="shine shimmer-lines"></div>
          </div>


          <div id="enter-pincode" style="font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].font} !important">
          <div class="shine shimmer-lines"></div>
          </div>

          <hr style="border: 1px solid #f7f7f7; margin: 0px;margin-top:15px" />
      </div>`;
    let companyFeature = ``;
    for (
      let i = 0;
      i < globalCheckActiveDetails?.data?.[0]?.seller_badges?.length;
      i++
    ) {
      companyFeature += `<div class="promise-trust-center-align" style="width:80px;" onclick="openPromisePopup('${
        badge_list[
          globalCheckActiveDetails?.data?.[0]?.seller_badges[
            i
          ]?.badge_id?.toString()
        ].key
      }')">
     <div class="shine img-shimmer-box">
      <img src="${
        badge_list[
          globalCheckActiveDetails?.data?.[0]?.seller_badges[
            i
          ]?.badge_id?.toString()
        ].icon
      }" style="height: 34px;width: auto;cursor: pointer;    display: inline;width: 34px; background:white" />
      </div> 
      <div style="font-size: ${globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"]?.["font-size"]=="default"?"10px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"]?.["font-size"]=="sm"?"9px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"]?.["font-size"]=="md"?"11px":"12px"};
  line-height: 12px;
  margin-top: 6px;max-width: 75px;cursor: pointer;text-align: center;">${
    badge_list[
      globalCheckActiveDetails?.data?.[0]?.seller_badges[
        i
      ]?.badge_id?.toString()
    ].text
  }</div>
  </div>`;
    }
    let companyFeaturesJsCode =
      `<div  class="promise-flexbox" style="align-items: baseline;"> <div id="promise-badges-scroll" style="overflow-x: scroll;
      width: 320px;scroll-behavior: smooth;"><div class="promise-flexbox promise-space-between" style="font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"].font}, Helvetica, sans-serif !important;
  letter-spacing: 0px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 30px;
  text-transform: none;
  background: transparent;
  font-weight: 400;
  text-align: initial;
  width:${globalCheckActiveDetails?.data?.[0]?.seller_badges?.length*80}px;
  color: ${globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"].color=="default"?"#5968BE":globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"].color};">` +
      companyFeature +
      `</div></div>` + (globalCheckActiveDetails?.data?.[0]?.seller_badges?.length > 4 ? `<div onclick="scrollBadges()" style="width:6px;height:10px;cursor:pointer;    margin-left: 20px;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/scrollLeft.svg" style="height:100%;width:100%;"/></div></div>`:`</div>`);

    companyFeaturesJsCode = companyFeaturesJsCode.replace(
      "{{X}}",
      globalCheckActiveDetails?.data?.[0]?.extra_settings?.return_days
    );
    let badge6Text = globalCheckActiveDetails?.data?.[0]?.seller_badges?.filter(
      (item) => item.badge_id === 6
    )[0]?.customization?.icon_text;
    companyFeaturesJsCode = companyFeaturesJsCode.replace("{{Y}}", badge6Text);
    if (
      document.querySelectorAll(".promise-product-page") &&
      promiseABVersion != "C"
    ) {
      const orderDetails = document.querySelectorAll(".promise-product-page");
      orderDetails.forEach((image) => {
        image.innerHTML = PDPjsCode;
      });
      // applyStylesBasedOnWidth();
      // window.addEventListener("resize", applyStylesBasedOnWidth);
    }
    if (
      document.querySelectorAll(".promise-company-features") &&
      promiseABVersion != "C" && globalCheckActiveDetails?.data?.[0]?.extra_settings?.show_badges == 1
    ) {
      const orderDetails = document.querySelectorAll(
        ".promise-company-features"
      );
      orderDetails.forEach((image) => {
        image.innerHTML = companyFeaturesJsCode;
      });
      // applyStylesBasedOnWidth();
      // window.addEventListener("resize", applyStylesBasedOnWidth);
    }
  }
  else if (promiseABVersion === "D") {
    const extra_info = globalCheckActiveDetails?.data?.[0]?.extra_info || {};
    const seller_badges = globalCheckActiveDetails?.data?.[0]?.seller_badges || {};
    const PDPjsCode = `
    <div class="promise-container">
      <div class="pincode-container">
        <h2>Check Delivery Date</h2>
        <div class="promise-pdp-page promise-basic-fonts" id="PromiseEddSection">

          <div id="enter-pincode" style="font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].font} !important">
            <div class="shine shimmer-lines"></div>
          </div>

          <div id="sr-icon">
            <div class="shine shimmer-lines"></div>
          </div>

          <div id="delivery-msg">
            <div class="shine shimmer-lines"></div>
          </div>

      </div>
    </div>
  </div>
      `;
    // Badge Code starts here 
    let companyFeature = ``;
    const textColor = (extra_info?.["icon-text"].color == "default")
      ? COLOR.BADGE_DEFAULT_COLOR : extra_info?.["icon-text"].color;
    for (let i = 0; i < seller_badges?.length; i++) {
          companyFeature += `<div class="promise-badges" onclick="openPromisePopup('${badge_list[seller_badges[i]?.badge_id?.toString()].key
        }')">
      <img src="${badge_list[seller_badges[i]?.badge_id?.toString()].icon}"/>
       <div class="text" style="color: ${textColor};">
       ${badge_list[seller_badges[i]?.badge_id?.toString()].text}</div></div>`;
    }
    let companyFeaturesJsCode =
      `<div class="promise-container" ><div class="promise-badges-container">` + companyFeature +`</div></div>` +
       (seller_badges?.length > 4 ? `<div onclick="scrollBadges()" style="width:6px;height:10px;cursor:pointer;    margin-left: 20px;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/scrollLeft.svg" style="height:100%;width:100%;"/></div></>`:`</div>`);

    companyFeaturesJsCode = companyFeaturesJsCode.replace(
      "{{X}}",
      globalCheckActiveDetails?.data?.[0]?.extra_settings?.return_days
    );
    let badge6Text = seller_badges?.filter(
      (item) => item.badge_id === 6
    )[0]?.customization?.icon_text;



    companyFeaturesJsCode = companyFeaturesJsCode.replace("{{Y}}", badge6Text);
    if (
      document.querySelectorAll(".promise-product-page") &&
      promiseABVersion != "C"
    ) {
      const orderDetails = document.querySelectorAll(".promise-product-page");
      orderDetails.forEach((productDiv) => {
        productDiv.innerHTML = PDPjsCode;
      });
      // applyStylesBasedOnWidth();
      // window.addEventListener("resize", applyStylesBasedOnWidth);
    }
    if (
      document.querySelectorAll(".promise-company-features") &&
      promiseABVersion != "C" && globalCheckActiveDetails?.data?.[0]?.extra_settings?.show_badges == 1
    ) {
      const orderDetails = document.querySelectorAll(
        ".promise-company-features"
      );
      orderDetails.forEach((image) => {
        image.innerHTML = companyFeaturesJsCode;
      });
      
      // applyStylesBasedOnWidth();
      // window.addEventListener("resize", applyStylesBasedOnWidth);
    }
  }
    // end of D
  else {
    const PDPjsCode = `  <div class="promise-pdp-page" id="PromiseEddSection" style="    font-family: Arial, Helvetica, sans-serif !important;
  letter-spacing: 0px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: none;
  background: transparent;
  font-weight: 400;
  text-align: initial;color: #313652;">
          <hr style="border: 1px solid #f7f7f7; margin: 0px;" />
          <div id="sr-icon">
          <div class="shine shimmer-lines"></div>
          </div>
          <div id="delivery-msg">
          <div class="shine shimmer-lines"></div>
          </div>


          <div id="enter-pincode" style="font-family : ${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].font} !important">
          <div class="shine shimmer-lines"></div>
          </div>

          <hr style="border: 1px solid #f7f7f7; margin: 0px;margin-top:15px" />
      </div>`;
    let companyFeature = ``;
    for (
      let i = 0;
      i < globalCheckActiveDetails?.data?.[0]?.seller_badges?.length;
      i++
    ) {
      companyFeature += `<div class="promise-trust-center-align" style="width:80px;" onclick="openPromisePopup('${
        badge_list[
          globalCheckActiveDetails?.data?.[0]?.seller_badges[
            i
          ]?.badge_id?.toString()
        ].key
      }')">
      <div class="shine img-shimmer-box">
      <img src="${
        badge_list[
          globalCheckActiveDetails?.data?.[0]?.seller_badges[
            i
          ]?.badge_id?.toString()
        ].dark_icon
      }" style="height: 34px;width: auto;cursor: pointer;    display: inline;width: 34px; background:black" />
      </div>
      <div style="font-size: ${globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"]?.["font-size"]=="default"?"10px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"]?.["font-size"]=="sm"?"9px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"]?.["font-size"]=="md"?"11px":"12px"};
  line-height: 12px;
  margin-top: 6px;max-width: 75px;cursor: pointer;text-align: center;">${
    badge_list[
      globalCheckActiveDetails?.data?.[0]?.seller_badges[
        i
      ]?.badge_id?.toString()
    ].text
  }</div>
  </div>`;
    }
    let companyFeaturesJsCode =
      ` <div  class="promise-flexbox" style="align-items: baseline;"> <div id="promise-badges-scroll" style="overflow-x: scroll;
        width: 320px;scroll-behavior: smooth;"><div class="promise-flexbox promise-space-between" style="font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"].font}, Helvetica, sans-serif !important;
  letter-spacing: 0px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 30px;
  text-transform: none;
  background: transparent;
  font-weight: 400;
  text-align: initial;
  width:${globalCheckActiveDetails?.data?.[0]?.seller_badges?.length*80}px;
  color: ${globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"].color=="default"?"#5968BE":globalCheckActiveDetails?.data?.[0]?.extra_info?.["icon-text"].color};">` +
        companyFeature +
        `</div></div>` + (globalCheckActiveDetails?.data?.[0]?.seller_badges?.length > 4 ? `<div onclick="scrollBadges()" style="width:6px;height:10px;cursor:pointer;    margin-left: 20px;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/scrollLeft.svg" style="height:100%;width:100%;"/></div></div>`:`</div>`);
  
      companyFeaturesJsCode = companyFeaturesJsCode.replace(
        "{{X}}",
        globalCheckActiveDetails?.data?.[0]?.extra_settings?.return_days
      );
      let badge6Text = globalCheckActiveDetails?.data?.[0]?.seller_badges?.filter(
        (item) => item.badge_id === 6
      )[0]?.customization?.icon_text;
      companyFeaturesJsCode = companyFeaturesJsCode.replace("{{Y}}", badge6Text);
      if (
        document.querySelectorAll(".promise-product-page") &&
        promiseABVersion != "C"
      ) {
        const orderDetails = document.querySelectorAll(".promise-product-page");
        orderDetails.forEach((image) => {
          image.innerHTML = PDPjsCode;
        });
        // applyStylesBasedOnWidth();
        // window.addEventListener("resize", applyStylesBasedOnWidth);
      }
      if (
        document.querySelectorAll(".promise-company-features") &&
        promiseABVersion != "C" && globalCheckActiveDetails?.data?.[0]?.extra_settings?.show_badges == 1
      ) {
        const orderDetails = document.querySelectorAll(
          ".promise-company-features"
        );
        orderDetails.forEach((image) => {
          image.innerHTML = companyFeaturesJsCode;
        });
        // applyStylesBasedOnWidth();
// window.addEventListener("resize", applyStylesBasedOnWidth);    }
  }
}
}

function renderPromiseSellerDetails() {
  let constStatsHtml = ``;
  let companyStats = [
    {
      bold_text: "Many Years",
      normal_text: "of Expertise",
    },
    {
      bold_text: "Huge Happy",
      normal_text: "Customers",
    },
    {
      bold_text: "Lacs of Successful",
      normal_text: "Shipments",
    },
  ];
  for (let i = 0; i < companyStats.length; i++) {
    const html = ` <div style=" border: 1px solid #DFF0F5; border-radius:10px; width: 200px; height: 50px;    margin-right: 15px; padding: 5px 30px;
      white-space: nowrap;
      text-align: center;padding-top: 10px;">
              <div style="font-size: 14px;
color: #2C1566;
line-height: 16px;
font-weight: 600;">${companyStats[i].bold_text}</div>
              <div style="font-size: 12px ; color: #3B3B3B;
              line-height: 14px;">${companyStats[i].normal_text}</div>
          </div>`;
    constStatsHtml += html;
  }
  const sellerDetailsHTML = ` <div style="margin:0 2.5%;font-size: 16px;line-height: 18px; color:#2C1566">Why Shop from <span style="font-weight: 600;">${globalCheckActiveDetails?.data?.[0]?.info?.brand_name}</span>
      </div>
      <div class="promise-flexbox" style="margin:
    0 2.5%;    margin-right: 0px;">
          <img src="${promiseImgUrl}trusted.png" height="64px" style="margin: 10px 0px; height:64px;width: auto;vertical-align: baseline;" />
          <div style="height: 60px;
      overflow-x: scroll;
      margin: 17px;margin-right: 0px; margin-bottom:10px;" class="promise-x-scroll promise-flexbox">${constStatsHtml}
             
          </div>
      </div>`;
  if (
    document.getElementById("promise-seller-details") &&
    promiseABVersion != "C"
  )
    document.getElementById("promise-seller-details").innerHTML =
      sellerDetailsHTML;

  let constFeatureHtml = ``;
  let companyFeatures = [
    {
      bold: "Money back",
      normal: "guarantee",
      icon: "https://kr-shipmultichannel-mum.s3.ap-south-1.amazonaws.com/promise/static/money-back.png",
    },
    {
      bold: "Fraud-free",
      normal: "Payments",
      icon: "https://kr-shipmultichannel-mum.s3.ap-south-1.amazonaws.com/promise/static/fraud.png",
    },
    {
      bold:
        globalCheckActiveDetails?.data?.[0]?.settings?.return?.max_days != "0"
          ? globalCheckActiveDetails?.data?.[0]?.settings?.return?.max_days +
            " Days"
          : "No",
      normal: "Return & Refund",
      icon:
        globalCheckActiveDetails?.data?.[0]?.settings?.return?.max_days != "0"
          ? "https://kr-shipmultichannel-mum.s3.ap-south-1.amazonaws.com/promise/static/return.png"
          : "https://kr-shipmultichannel-mum.s3.ap-south-1.amazonaws.com/promise/static/no-return.png",
    },
  ];
  for (let i = 0; i < companyFeatures.length; i++) {
    const html = ` <div style="width:30%;     margin-left: 2.5%;" class="pro-tag-box-small   ">
      <img style="height:22px;width: auto;vertical-align: baseline;" src="${companyFeatures[i].icon}" height="22" />
      <div  class="pro-tag-text pro-features-text"><span
              style="font-weight: 600;">${companyFeatures[i].bold}</span> ${companyFeatures[i].normal}</div>
  </div>`;
    constFeatureHtml += html;
  }
  if (
    document.getElementById("promise-company-features") &&
    promiseABVersion != "C"
  )
    document.getElementById("promise-company-features").innerHTML =
      constFeatureHtml;

  applyStylesBasedOnWidth();
}
const shiprocketBrandingComponent = () => {
    const shiprocketBranding = `<div class="branding">
              <div class="shiprocket-logo" onclick="openPromisePopup('default')" >
                ${shiprocketSVG}
                <span>Shiprocket</span>
              </div>
            </div>`;
  return shiprocketBranding;
};
const deliverablePincodeComponent = (servicibilityDetails) => { 
  const dayOfWeek = getDayOfWeek(
      servicibilityDetails?.data[0]?.courier_response?.promise_edd
  );
  const promiseEdd = servicibilityDetails?.data[0]?.courier_response?.promise_edd || "";
  
  document.getElementById("delivery-msg").innerHTML = `
     <div class="delivery-info">
          ${upArrowSVG}
          ${handBagSVG}
          <div class="delivery-text">
            <span>Get it by ${dayOfWeek}, ${promiseEdd} ${(is_whitelabeling_enabled) ? ' with ' : ''}</span>
          </div>
          ${(is_whitelabeling_enabled) ? shiprocketBrandingComponent() : ''}
        </div>`;
}

const eddComponent = (servicibilityDetails, buyerPincode) => {
  // constants Declarations
  const extraInfo = globalCheckActiveDetails?.data?.[0]?.extra_info || {};
  const fontFamily = extraInfo?.["location_text"].font;
  const fontSize = extraInfo?.["location_text"]?.["font-size"] === "default" ? "13px" : extraInfo?.["location_text"]?.["font-size"] === "sm" ? "12px" : extraInfo?.["location_text"]?.["font-size"] === "md" ? "14px" : "15px";
  const textColor = extraInfo?.["location_text"].color === "default" ? COLOR.BADGE_DEFAULT_COLOR : extraInfo?.["location_text"].color;
  const cityName = servicibilityDetails?.data[0]?.postcode_info?.city ? servicibilityDetails?.data[0]?.postcode_info?.city.charAt(0).toUpperCase() + servicibilityDetails?.data[0]?.postcode_info?.city.slice(1) + " - " : "";
  
  return `<div class="input-container delivery-pincode-container">
            <div class="address">
              <img src="https://sr-cdn.shiprocket.in/sr-promise/images/location.png">
              <div class="text" style=font-size:${fontSize};color:${textColor};font-family:${fontFamily} !important>
                Deliver to ${cityName} ${buyerPincode}
              </div>
            </div>
            <button onclick="editPromisePincode()">Change</button>
          </div>
    `;
};
const renderEddComponent = (servicibilityDetails, buyerPincode) => {
  const _eddComponent = eddComponent(servicibilityDetails, buyerPincode);
  document.getElementById(
    "enter-pincode"
  ).innerHTML = _eddComponent;
};

function renderOnlyServicableData(servicibilityDetails, buyerPincode) {
  if (promiseABVersion === "A") {
    document.getElementById(
      "enter-pincode"
    ).innerHTML = ` <div class="promise-flexbox" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color === "default"?"#5968BE":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color};margin-top:13px;margin-bottom: 13px;"><img
  src="https://sr-cdn.shiprocket.in/sr-promise/images/location.png" style="height: 14px;width: auto;
  margin-top: 1px;    margin-left: 8px;
  " />
  <div style="font-size:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="default"?"13px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="sm"?"12px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="md"?"14px":"15px"};margin-left: 6px;font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].font} !important ">Deliver to ${ 
    servicibilityDetails?.data[0]?.postcode_info?.city ? 
    servicibilityDetails?.data[0]?.postcode_info?.city.charAt(0).toUpperCase() +
    servicibilityDetails?.data[0]?.postcode_info?.city.slice(1) + " - " : ""
  }${buyerPincode}</div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/edit-icon.png" style="height: 13px;
  margin-left: 6px;
  margin-top: 1px;cursor: pointer;width: auto;" onclick="editPromisePincode()" />
  </div>`;
    callGAEvent("EDD displayed", {
      delivery_pincode: buyerPincode,
      edd_presented:
        servicibilityDetails?.data[0]?.courier_response?.promise_edd,
    });
    document.getElementById(
      "delivery-msg"
    ).innerHTML = ` <div class="promise-flexbox" style="margin-top:13px"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/box-icon.png" style="
  height: 14px;
  margin-top: 1px;
  margin-right: 5px;
  width: auto;
  " />
  <div class="promise-theme2-text" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color=="default"?"black":globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color};font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">Get it by <span style="font-weight:600;float:inherit;font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">${getDayOfWeek(
    servicibilityDetails?.data[0]?.courier_response?.promise_edd
  )},
      ${
        servicibilityDetails?.data[0]?.courier_response?.promise_edd
      }</span>${is_whitelabeling_enabled? "" : "with"} </div>${is_whitelabeling_enabled ?"": '<div class="promise-flexbox" style="cursor: pointer;" onclick="openPromisePopup("default")" ><div class="circle-container"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/with-bg.svg" style="margin: 2px;height: 16px;margin-top: 0px;width: auto;"><div class="circle-animation"></div></div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-text.svg" style="height: 9px;margin-top: 5px;margin-left: 2px;width: auto;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/info.png" style="height: 9px;margin-top: 5px;margin-left: 4px;width: auto;"></div>'}
  </div>`;
    document.getElementById("sr-icon").innerHTML = null;
  }
  else if (promiseABVersion === "D") {
    
    // New Code 
    deliverablePincodeComponent(servicibilityDetails);
    hideShimmer();
    renderEddComponent(servicibilityDetails, buyerPincode);

    const promiseEdd = servicibilityDetails?.data[0]?.courier_response?.promise_edd || "";
    callGAEvent("EDD displayed",
      {
        delivery_pincode: buyerPincode,
        edd_presented:
          promiseEdd,
      }
    );
  } else {
    document.getElementById(
      "enter-pincode"
    ).innerHTML = ` <div class="promise-flexbox" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color === "default"?"#5968BE":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color};margin-top:13px;margin-bottom: 13px;"><img
  src="https://sr-cdn.shiprocket.in/sr-promise/images/location.png" style="height: 14px;width: auto;
  margin-top: 1px;    margin-left: 8px;
  " />
  <div style="font-size:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="default"?"13px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="sm"?"12px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="md"?"14px":"15px"};margin-left: 6px;font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].font} !important ">Deliver to ${ 
    servicibilityDetails?.data[0]?.postcode_info?.city ? 
    servicibilityDetails?.data[0]?.postcode_info?.city.charAt(0).toUpperCase() +
    servicibilityDetails?.data[0]?.postcode_info?.city.slice(1) + " - " : ""
  }${buyerPincode}</div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/edit-icon.png" style="height: 13px;
  margin-left: 6px;
  margin-top: 1px;cursor: pointer;width: auto;" onclick="editPromisePincode()" />
  </div>`;
    callGAEvent("EDD displayed", {
      delivery_pincode: buyerPincode,
      edd_presented:
        servicibilityDetails?.data[0]?.courier_response?.promise_edd,
    });
    document.getElementById(
      "delivery-msg"
    ).innerHTML = ` <div class="promise-flexbox" style="margin-top:13px"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/box-icon.png" style="
  height: 14px;
  margin-top: 1px;
  margin-right: 5px;
  width: auto;
  " />
  <div class="promise-theme2-text" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color=="default"?"white":globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color};font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">Get it by <span style="font-weight:600;float:inherit;font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">${getDayOfWeek(
    servicibilityDetails?.data[0]?.courier_response?.promise_edd
  )},
      
 
      ${
        servicibilityDetails?.data[0]?.courier_response?.promise_edd
      }</span> ${is_whitelabeling_enabled ? "" : "with"} </div>${is_whitelabeling_enabled ? "" : '<div class="promise-flexbox"  style="cursor: pointer;" onclick="openPromisePopup("default")"><div class="circle-container"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/with-bg.svg" style="margin: 2px;height: 16px;margin-top: 0px; width: auto;"><div class="circle-animation"></div></div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-text.svg" style="height: 9px;margin-top: 5px;margin-left: 2px; width: auto;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/info.png" style="height: 9px;margin-top: 5px;margin-left: 4px; width: auto;"></div>'}
    </div>`;
    document.getElementById("sr-icon").innerHTML = null;
  }
}
async function renderPromiseOverlay(authToken) {
  if (promiseABVersion === "A" || promiseABVersion === "D") {
    const popupJsCode = `   
<div class="promise-overlay-bg display-none">
<div class="promise-overlay-main">
<div class="promise-flexbox promise-space-between" style="margin-top: 5px;">
    <div style="font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        color: #333333;" id="promise-popup-heading">Delivery Guaranteed</div>
    <div style="font-size: 15px;

color: #707070;cursor: pointer;" onclick="closePromisePopup()">X</div>

</div>

<div style="    margin-top: 14px;
font-size: 14px;
line-height: 21px;
color: #313652;
" id="promise-popup-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
    sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
<hr style="border: 1px solid #f7f7f7; margin: 0px; margin-top:15px" />
<div class="promise-flexbox" style="margin-top:10px">
    <div style="font-size: 12px;
    line-height: 22px;
    color: #939393;
    margin-right: 10px;">Powered by</div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-icon.png" style="margin: 2px;
height: 16px; width: auto;" />
</div>
</div>

</div>`;
    const staticIcon = `  <div onclick="moveToPromiseEDD()" style="
position: fixed;
bottom: 75%;
right: 0;
height: 62px;
min-width: 67px;
z-index: 998;
padding: 4px;
text-align: center;
cursor: pointer;
line-height: 14px;
letter-spacing: 0px;
font-family: Arial, Helvetica, sans-serif;
border-radius: 49% 0 0 49%;
background: #2C304A;
box-sizing: border-box;

">
    <div>
    <img src="https://sr-cdn.shiprocket.in/sr-promise/images/check_edd.png" style="height: 33px;
position: absolute;
z-index: 1;
top: 13px;
right: 21px; width: auto;"/><div
    style="
    border-bottom: 4px solid #b9b2d4b3;
    border-top: 4px solid #c0d7c9cf;
    border-right: 4px solid #b9b2d4de;
    border-left: 4px solid #c0d7c9a6;
    height: 54px;
    border-radius: 50%;
    margin-right: 4px;
    width: 54px;
    background: white;
    box-sizing: border-box;
    animation: edd_pulse 2s linear infinite;
    position: absolute;
    top: 4px;"  >

    </div>
</div>
 </div>`;
    let newElement = document.createElement("div");
    newElement.innerHTML = staticIcon;
    if (
      document.getElementById("promise-overlay") &&
      promiseABVersion != "C" &&
      /^\/(?:products|collections\/[^/]+\/products)\/[^/]+/.test(
        window.location.pathname
      )
    ) {
      document.getElementById("promise-overlay").innerHTML = popupJsCode;

      // Uncomment below line to enable EDD toggle
      //document.getElementById("promise-overlay").insertAdjacentElement('afterend',newElement)
    }
  } else {
    const popupJsCode = `   
    <div class="promise-overlay-bg display-none">
    <div class="promise-overlay-main">
    <div class="promise-flexbox promise-space-between" style="margin-top: 5px;">
        <div style="font-size: 18px;
            line-height: 22px;
            font-weight: 600;
            color: #333333;" id="promise-popup-heading">Delivery Guaranteed</div>
        <div style="font-size: 15px;
    
    color: #707070;cursor: pointer;" onclick="closePromisePopup()">X</div>
    
    </div>
    
    <div style="    margin-top: 14px;
    font-size: 14px;
    line-height: 21px;
    color: #313652;
    " id="promise-popup-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
    <hr style="border: 1px solid #f7f7f7; margin: 0px; margin-top:15px" />
    <div class="promise-flexbox" style="margin-top:10px">
        <div style="font-size: 12px;
        line-height: 22px;
        color: #939393;
        margin-right: 10px;">Powered by</div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-icon.png" style="margin: 2px; width: auto;
    height: 16px;" />
    </div>
    </div>
    
    </div>`;
        const staticIcon = `  <div onclick="moveToPromiseEDD()" style="
    position: fixed;
    bottom: 75%;
    right: 0;
    height: 62px;
    min-width: 67px;
    z-index: 998;
    padding: 4px;
    text-align: center;
    cursor: pointer;
    line-height: 14px;
    letter-spacing: 0px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 49% 0 0 49%;
    background: #2C304A;
    box-sizing: border-box;
    
    ">
        <div>
        <img src="https://sr-cdn.shiprocket.in/sr-promise/images/check_edd.png" style="height: 33px;
    position: absolute;
    z-index: 1;
    top: 13px; width: auto;
    right: 21px;"/><div
        style="
        border-bottom: 4px solid #b9b2d4b3;
        border-top: 4px solid #c0d7c9cf;
        border-right: 4px solid #b9b2d4de;
        border-left: 4px solid #c0d7c9a6;
        height: 54px;
        border-radius: 50%;
        margin-right: 4px;
        width: 54px;
        background: white;
        box-sizing: border-box;
        animation: edd_pulse 2s linear infinite;
        position: absolute;
        top: 4px;"  >
    
        </div>
    </div>
     </div>`;
        let newElement = document.createElement("div");
        newElement.innerHTML = staticIcon;
        if (
          document.getElementById("promise-overlay") &&
          promiseABVersion != "C" &&
          /^\/(?:products|collections\/[^/]+\/products)\/[^/]+/.test(
            window.location.pathname
          )
        ) {
          document.getElementById("promise-overlay").innerHTML = popupJsCode;
    
          // Uncomment below line to enable EDD toggle
          //document.getElementById("promise-overlay").insertAdjacentElement('afterend',newElement)
        }
  }
}
function renderOnlyCheckServiceData() {
  if (promiseABVersion == "A") {
    document.getElementById(
      "enter-pincode"
    ).innerHTML = `   <div class="promise-flexbox" style="color:#5968BE;margin-top:13px;margin-bottom: 13px;"><img
  src="https://sr-cdn.shiprocket.in/sr-promise/images/location.png" style="height: 14px;
margin-top: 1px;    margin-left: 8px;  width: auto;
" />
<div style="font-size:13px;margin-left: 6px;" onclick="editPromisePincode()">Enter area Pincode
</div>
</div>`;
    document.getElementById(
      "delivery-msg"
    ).innerHTML = ` <div class="promise-flexbox" style="margin-top:13px"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/box-icon.png" style="
                height: 14px;
                margin-top: 1px;
                margin-right: 5px;
                width: auto;
            " />
                    <div style="font-size: 14px;">Check <span style="font-weight:600;float:inherit;">EDD</span> by entering pin-code
                        below</div>
                </div>`;
    document.getElementById("sr-icon").innerHTML = `
  <div class="promise-flexbox" style="margin-top:13px;cursor: pointer;" onclick="openPromisePopup('default')" ><div class="circle-container">
  <img src="https://sr-cdn.shiprocket.in/sr-promise/images/with-bg.svg" style="margin: 2px;height: 16px;margin-top: 0px; width: auto;">
  <div class="circle-animation"></div>
  </div>
  <img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-text.svg" style="height: 9px;margin-top: 5px;margin-left: 2px; width: auto;">
  <img src="https://sr-cdn.shiprocket.in/sr-promise/images/info.png" style="
  height: 9px;
  margin-top: 5px;
  margin-left: 4px;
  width: auto;
  ">
  </div>`;
  } else {
    document.getElementById(
      "enter-pincode"
    ).innerHTML = `   <div class="promise-flexbox" style="color:#5968BE;margin-top:13px;margin-bottom: 13px;"><img
  src="https://sr-cdn.shiprocket.in/sr-promise/images/location.png" style="height: 14px;
margin-top: 1px;    margin-left: 8px; width: auto;
" />
<div style="font-size:13px;margin-left: 6px;" onclick="editPromisePincode()">Enter area Pincode
</div>
</div>`;
    document.getElementById(
      "delivery-msg"
    ).innerHTML = ` <div class="promise-flexbox" style="margin-top:13px"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/box-icon.png" style="
                height: 14px;
                margin-top: 1px;
                margin-right: 5px;
                width: auto;
            " />
                    <div style="font-size: 14px;">Check <span style="font-weight:600;float:inherit;">EDD</span> by entering pin-code
                        below</div>
                </div>`;
    document.getElementById("sr-icon").innerHTML = `
  <div class="promise-flexbox" style="margin-top:13px;cursor: pointer;" onclick="openPromisePopup('default')" ><div class="circle-container">
  <img src="https://sr-cdn.shiprocket.in/sr-promise/images/with-bg.svg" style="margin: 2px;height: 16px;margin-top: 0px; width: auto;">
  <div class="circle-animation"></div>
  </div>
  <img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-text.svg" style="height: 9px;margin-top: 5px;margin-left: 2px; width: auto;">
  <img src="https://sr-cdn.shiprocket.in/sr-promise/images/info.png" style="
  height: 9px;
  margin-top: 5px;
  margin-left: 4px;
  width: auto;
  ">
  </div>`;
  }
}
async function checkPromiseActiveStatus(token){
  localStorage.removeItem("_p_active_status_");
  let showInPreview = false
  if(isPreviewRequest)
  // Todo: Remove below Code 
  // Shopify = {};
  // Shopify.shop = "zop-by-shiprocket.myshopify.com";
  // Shopify.designMode = true;
  // Todo:Remove above Code 
  showInPreview = Shopify && Shopify?.designMode === true
  const promiseActiveData = await makeAPIRequest(
    `${promiseApiUrl}/api/v1/shopify/seller/details/view?is_preview=${
      showInPreview ? "1" : "0"
    }&purge_key=1`,
    token,
    "GET",
    ""
  );
  if (promiseActiveData?.data[0]?.promise_status || showInPreview) {
    let isBillingActive = true;
    if(promiseActiveData?.data[0]?.subscription_status == 3 || promiseActiveData?.data[0]?.subscription_status == 0 )
    isBillingActive = false
    const promiseData = {
      status: true,
      details: promiseActiveData,
      expirationTime: new Date().getTime() + 900000,
    };
    globalCheckActiveDetails = promiseActiveData;
    is_whitelabeling_enabled = !!promiseActiveData?.data[0]?.extra_settings?.white_label_onboarding
    if (
      globalCheckActiveDetails?.data?.[0]?.extra_settings?.widget_theme ===
      "light"
    ) {
      promiseABVersion = "A";
      localStorage.setItem("_p_version_theme__", "A");
    } else {
      promiseABVersion = "B";
      localStorage.setItem("_p_version_theme__", "B");
    } 

    // Overide if Shopify && Shopify?.shop === "zop-by-shiprocket.myshopify.com"
    if (Shopify && Shopify?.shop === "zop-by-shiprocket.myshopify.com") {
      promiseABVersion = "D";
      localStorage.setItem("_p_version_theme__", promiseABVersion);
    }
    localStorage.setItem("_p_active_status_", JSON.stringify(promiseData));
    return showInPreview == true
      ? true
      : isBillingActive? promiseActiveData?.data[0]?.promise_status : false;
  } else {
    return showInPreview == true ? true : false;
  }
}
async function checkPromiseActiveStatusOld(email) {
  // return true;
  localStorage.removeItem("_p_active_status_");

  const response = await fetch(
    `${promiseApiUrl}/api/v2/shopify-app/seller/details/view?is_preview=${
      isPreviewRequest ? "1" : "0"
    }&purge_key=1&uuid=${email}`,
    {
      method: "GET",
      headers: {
        Authorization: "1234567890",
      },
    }
  );
  const promiseActiveData = await response.json();
  if (promiseActiveData?.data[0]?.promise_status || isPreviewRequest) {
    const promiseData = {
      status: true,
      details: promiseActiveData,
      expirationTime: new Date().getTime() + 900000,
    };
    globalCheckActiveDetails = promiseActiveData;

    if (
      globalCheckActiveDetails?.data?.[0]?.extra_settings?.widget_theme ===
      "light"
    ) {
      promiseABVersion = "A";
      localStorage.setItem("_p_version_theme__", "A");
    } else {
      promiseABVersion = "B";
      localStorage.setItem("_p_version_theme__", "B");
    }

    localStorage.setItem("_p_active_status_", JSON.stringify(promiseData));
    return isPreviewRequest == true
      ? true
      : promiseActiveData?.data[0]?.promise_status;
  } else {
    return isPreviewRequest == true ? true : false;
  }
}

function handlePromiseInputKeyPress(event) {
  if (event.key === "Enter") {
    applyPromisePincode();
    event.preventDefault();
  } else {
    document.getElementById("promise-enter-pincode-input").style.border =
      "1px solid gainsboro";
    document.getElementById("promise-input-error-msg").innerHTML = "";
    document.getElementById("pincode-input-container").style.border = "";
  }
}
function handleCartFormSubmit(event) {
  //event.preventDefault();
  callGAEvent("Checkout Initiated", {});
}

function formSubmissionHandler(event) {
  localStorage.setItem("_p_atc_sub", 1);
  //event.preventDefault();
  const action = event.target.getAttribute("action");
  if (action === "/cart/add") {
    callGAEvent("Add to Cart", {});
    if (isABTestEnabled === true) {
      if (promiseABVersion == "A") {
        callGAEvent("Add to Cart A", {});
      } else if (promiseABVersion == "B") {
        callGAEvent("Add to Cart B", {});
      } else {
        callGAEvent("Add to Cart C", {});
      }
    }
  } else if (action === "/cart/update") {
    callGAEvent("Update Cart", {});
  }
}
function gaAtcClickHandler() {
  callGAEvent("Add to Cart", {});
  if (isABTestEnabled === true) {
    if (promiseABVersion == "A") {
      callGAEvent("Add to Cart A", {});
    } else if (promiseABVersion == "B") {
      callGAEvent("Add to Cart B", {});
    } else {
      callGAEvent("Add to Cart C", {});
    }
  }
}
function formClickingHandler(event) {
  //event.preventDefault();
  setTimeout(() => {
    if (localStorage.getItem("_p_atc_sub") !== 1) {
      callGAEvent("Add to Cart", {});
      if (isABTestEnabled === true) {
        if (promiseABVersion == "A") {
          callGAEvent("Add to Cart A", {});
        } else if (promiseABVersion == "B") {
          callGAEvent("Add to Cart B", {});
        } else if (promiseABVersion == "D") {
          callGAEvent("Add to Cart D", {});
        } else {
          callGAEvent("Add to Cart C", {});
        }
      }
    }
  }, 500);
}

async function addPromiseTagsOnSellerPage() {
  if (!document.getElementById("promise-overlay")) {
    const newElement = document.createElement("div");
    newElement.id = "promise-overlay";
    const bodyElement = document.body;
    bodyElement.insertBefore(newElement, bodyElement.firstChild);
  }

  const cartForms = document.querySelectorAll('form[action="/cart"]');

  // Add event listeners to each form
  cartForms.forEach((form) => {
    //   form.addEventListener('submit', handleCartFormSubmit);
  });
  const productPagePattern =
    /^\/(?:products|collections\/[^/]+\/products)\/[^/]+/;
  if (window.location.pathname.includes("/checkout")) {
    callGAEvent("Checkout Initiated", {});
  }
  if (window.location.pathname.includes("thank_you")) {
    callGAEvent("Order Created", {});
  }
  //   const gaAtcSelectors = globalCheckActiveDetails?.data?.[0]?.placeholders?.ga?.atc
  //   if(gaAtcSelectors && gaAtcSelectors?.length){
  //     for(let i = 0; i< gaAtcSelectors?.length ; i++){
  //       document.querySelectorAll(gaAtcSelectors[i]).forEach(item=> item.addEventListener('click',gaAtcClickHandler))
  //     }
  //   }else{
  //   const allForms = document.querySelectorAll("form");
  //   allForms.forEach(async (form) => {
  //      const action = form.getAttribute("action");
  //     if (action === "/cart/add" || action === "/cart/update") {
  //       form.addEventListener("submit", formSubmissionHandler, true);
  //       setTimeout(async ()=>{
  //         const authToken = globalAuthToken ? globalAuthToken :
  //         localStorage.getItem("_p_token") &&
  //         new Date().getTime() <
  //           JSON.parse(localStorage.getItem("_p_token"))?.expirationTime
  //           ? JSON.parse(localStorage.getItem("_p_token"))?.value
  //           : await getSellerAuthToken(sellerEmail);
  //       // const sellerDetails = globalSellerDetails ? globalSellerDetails :
  //       //   localStorage.getItem("_p_buzz_info") &&
  //       //   new Date().getTime() <
  //       //     JSON.parse(localStorage.getItem("_p_buzz_info"))?.expirationTime
  //       //     ? JSON.parse(localStorage.getItem("_p_buzz_info"))?.value
  //       //     : await getPromiseSellerDetails(authToken);
  //         let company_id =globalCheckActiveDetails?.data?.[0]?.cid ;
  //         if(company_id == 78476 || company_id == 127259 || company_id== 2937780 )
  //          form.addEventListener("click", formClickingHandler, true);
  //       },500)
  //      // form.addEventListener("click", formClickingHandler, true);
  //     }
  //   });
  // }
  // Check if the current URL matches the product page pattern
  if (productPagePattern.test(window.location.pathname)) {
    let sovaCustom = hideSovaURLs.filter((item) =>
      window.location.pathname.includes(item)
    ).length;
    if (
      sellerEmail === "98aca214-d921-4246-a3cb-96d4b357e706" &&
      sovaCustom > 0
    ) {
    } else {
      // const toHideSelectors = globalCheckActiveDetails?.data?.[0]?.placeholders?.to_hide
      // if(toHideSelectors && toHideSelectors?.length){
      //   for(let i = 0; i< toHideSelectors?.length ; i++){
      //     document.querySelector(toHideSelectors[i]).innerHTML=null;
      //   }
      // }
      // Autommatically add promise widget to pdp page or specified page in db
      const promisePdpTags = document.querySelectorAll(".promise-product-page");
      if (promisePdpTags.length == 0) {
          const newElement = document.createElement("div");
          newElement.className = "promise-product-page";
          const newElement2 = document.createElement("div");
          newElement2.className = "promise-company-features";
          let placeholders = globalCheckActiveDetails?.data?.[0]?.placeholders?.widgets?.pdp
          if(placeholders && placeholders.length){
            for(let i= 0; i<placeholders.length ; i++){
            let newEl = document.createElement('div');
            newEl.className = widgetTypeMap[placeholders[i].type];
            let allFormTags = document.querySelectorAll(placeholders[i].selector);
            allFormTags[0].insertAdjacentElement(placeholders[i].position,newEl);
            }
          }
         else {
            const allFormTags = document.querySelectorAll('form[action="/cart/add"]');
            const filteredFormTags = Array.from(allFormTags).filter((form) => {
              return Array.from(form.elements).some(
                (element) => element.type === "submit"
              );
            });
            if (filteredFormTags.length) {
              filteredFormTags[0].insertAdjacentElement("afterend", newElement2);
              filteredFormTags[0].insertAdjacentElement("afterend", newElement);
            }
          }
      } else {
        // const promiseCompanyFeatures = document.querySelectorAll(".promise-company-features")
        // if (promiseCompanyFeatures.length == 0) {
        //   const newElement2 = document.createElement("div");
        // newElement2.className = "promise-company-features";
        // promisePdpTags[0].insertAdjacentElement('afterend',newElement2)
        // }
      }
    }
    const widgetElements = document.querySelectorAll(".promise-product-page");
    let interactionStartTime;
    widgetElements.forEach((el) =>
      el.addEventListener("click", () => {
        callGAEvent("Clicked on Promise Widget", {});
      })
    );
    widgetElements.forEach((el) =>
      el.addEventListener("touchstart", () => {
        interactionStartTime = startWidgetInteraction();
      })
    );
    widgetElements.forEach((el) =>
      el.addEventListener("touchend", () => {
        if (interactionStartTime) {
          endWidgetInteraction(interactionStartTime);
          interactionStartTime = null;
        }
      })
    );
    widgetElements.forEach((el) =>
      el.addEventListener("mouseenter", () => {
        interactionStartTime = startWidgetInteraction();
      })
    );
    widgetElements.forEach((el) =>
      el.addEventListener("mouseleave", () => {
        if (interactionStartTime) {
          endWidgetInteraction(interactionStartTime);
          interactionStartTime = null;
        }
      })
    );
  }
}
async function setAuthAndStatsInLocal() {
  const authToken = globalAuthToken
    ? globalAuthToken
    : localStorage.getItem("_p_token") &&
      new Date().getTime() <
        JSON.parse(localStorage.getItem("_p_token"))?.expirationTime
    ? JSON.parse(localStorage.getItem("_p_token"))?.value
    : await getSellerAuthToken(sellerEmail);
  globalAuthToken = authToken;
  const sellerDetails = globalSellerDetails
    ? globalSellerDetails
    : localStorage.getItem("_p_buzz_info") &&
      new Date().getTime() <
        JSON.parse(localStorage.getItem("_p_buzz_info"))?.expirationTime
    ? JSON.parse(localStorage.getItem("_p_buzz_info"))?.value
    : await getPromiseSellerDetails(authToken);
  globalSellerDetails = sellerDetails;
}
const checkPromiseExtensionPresent = ()=>{
let promiseTags =  document.querySelectorAll(".promise-product-page").length
return promiseTags>0 ? true : false;
}
function addUniversalCookieScript(){
  const promiseUniversalCookiesScript = document.createElement('script');
  promiseUniversalCookiesScript.src = `https://sr-cdn.shiprocket.in/sr-promise/static/uc.js?channel_id=1`
  promiseUniversalCookiesScript.defer = true; // Add the defer attribute
  promiseUniversalCookiesScript.id = "uc_shiprocket"
  
  
  // Append link and script elements to the head of the document
  document.head.appendChild(promiseUniversalCookiesScript);
}
function callUCEvent(event_name, event_obj){
  if(ua)
  ua.event(event_name,event_obj );
}
const promiseDOMContentLoaded = async () => {
  async function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      script.defer = true;
      const uc_script = document.getElementById("uc_shiprocket");
      // if (uc_script) {
        script.src = url + "?channel_id=" + 2;
        script.setAttribute("id", "uc_shiprocket");
     // }

      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));

      document.head.appendChild(script);
    });
  }
 function atcFormHandler(){
  callUCEvent("atc", {
    name: String(ShopifyAnalytics?.meta?.product?.variants[0]?.name),
    variant_id: String(ShopifyAnalytics?.meta?.product?.variants[0]?.id),
    selling_price:
    String(ShopifyAnalytics?.meta?.product?.variants[0]?.price / 100),
    qty: String(ShopifyAnalytics?.meta?.product?.variants[0]?.quantity),
    cart_id:String(decodeURIComponent(getCookie("cart"))?.split('?key=')[0]),
    mrp: String(ShopifyAnalytics.meta.product.variants[0].price / 100),
    category: "",
    product_id: String(ShopifyAnalytics?.meta?.product?.id),
    referrer: "",
  })
 }
  function buyNowHandler() {
    let productInfo = {};
    let selectedVariantId = ShopifyAnalytics?.meta?.selectedVariantId || null;
    if (ShopifyAnalytics?.meta?.product?.variants?.length && ShopifyAnalytics?.meta?.product?.variants?.length > 1 && selectedVariantId) {
      ShopifyAnalytics?.meta?.product?.variants.forEach((variant) => {
        if (variant.id === selectedVariantId) {
          productInfo = variant;
        }
      });
    }
    if (Object.keys(productInfo)?.length === 0 && ShopifyAnalytics?.meta?.product?.variants?.length) {
        productInfo = ShopifyAnalytics?.meta?.product?.variants[0];
      }
    let payload = {
      "source_channel": "",
      "referrer": "",
      "order_total_amt": "",
      "order_qty": String(productInfo?.quantity || ''),
      "cart_id": "",
      "referrer": "",
      "couponData": {
        "coupon_code": '',
        "coupon_type": '',
        "discount_amount": '',
      },
      "items": [
        {
          "name": String(productInfo?.name),
          "mrp": String(productInfo?.price / 100),
          "selling_price": String(productInfo?.price / 100),
          "product_id": String(ShopifyAnalytics?.meta?.product?.id),
          "variant_id": String(productInfo?.id),
          "qty": String(productInfo?.quantity || ''),
          "category": String(ShopifyAnalytics?.meta?.product?.type),
          "image": "",
          "description": "",
          "sku": String(productInfo?.sku),
        },
      ]
    };
    callUCEvent("buy", payload);
  }
  // Load another JavaScript file
  try {
    // await loadScript('./dist/uc.js');
    await loadScript(
      "https://sr-cdn.shiprocket.in/sr-promise/static/uc.js"
    );
    console.log("uc.js has been loaded and executed");
    if (
      /^\/(?:products|collections\/[^/]+\/products)\/[^/]+/.test(
        window.location.pathname
      )
    )
      callUCEvent("pdp_view", {
        name: String(ShopifyAnalytics?.meta?.product?.variants[0]?.name),
    mrp: String(ShopifyAnalytics.meta.product.variants[0].price / 100),
    selling_price: String(ShopifyAnalytics.meta.product.variants[0].price / 100),
    product_id: String(ShopifyAnalytics?.meta?.product?.id),
    variant_id: String(ShopifyAnalytics?.meta?.product?.variants[0]?.id),
    qty: String(ShopifyAnalytics?.meta?.product?.variants[0]?.quantity),
    category: "",
    out_of_stock: "0",
    image: "",
    description: "",
    referrer: "",
      });
      setTimeout(() => {
        //ATC detector
        const allForms = document.querySelectorAll("form");
        allForms.forEach(async (form) => {
          const action = form.getAttribute("action");
          if (action === "/cart/add" || action === "/cart/update") {
            form.addEventListener("submit", atcFormHandler, true);
          }
        });
      
      //Buy button detector
      const buttons = document.querySelectorAll("button[class*='shopify-payment-button']");
      // Filter buttons to get only visible ones
      const buyButtons = Array.from(buttons).filter(button => button.offsetParent !== null);
      buyButtons.forEach((buyButton) => { 
        // Add Click Events 
        buyButton.addEventListener("click", buyNowHandler, true);
      });
    },1000)
  } catch (error) {
    console.error(error);
  }
  // await setAuthAndStatsInLocal();
  let isBlockPresent = checkPromiseExtensionPresent()
  if(isBlockPresent){
  try {
    const tempAuth = JSON.parse(localStorage.getItem("_p_token"));
  } catch {
    localStorage.removeItem("_p_token");
  }
  const authToken = globalAuthToken
    ? globalAuthToken
    : localStorage.getItem("_p_token") &&
      new Date().getTime() <
        JSON.parse(localStorage.getItem("_p_token"))?.expirationTime
    ? JSON.parse(localStorage.getItem("_p_token"))?.value
    : await getSellerAuthToken(sellerEmail);
  const isPromiseActive = await checkPromiseActiveStatus(authToken);
  if (isPromiseActive) {
    //addPromiseClarityScript(globalCheckActiveDetails?.data?.[0]?.settings?.shopify?.clarity_code);
    // clarity("set", "ABtheme", promiseABVersion );
    handleSessionAndAtcData(authToken)
    addPromiseTagsOnSellerPage();
    renderHeadJSCode();
    renderPromisePageWithShimmer();

    
    if (authToken) {
      // const sellerDetails = globalSellerDetails ? globalSellerDetails :
      //   localStorage.getItem("_p_buzz_info") &&
      //   new Date().getTime() <
      //     JSON.parse(localStorage.getItem("_p_buzz_info"))
      //       ?.expirationTime
      //     ? JSON.parse(localStorage.getItem("_p_buzz_info"))?.value
      //     : await getPromiseSellerDetails(authToken);

      renderPromiseOverlay(authToken);

      const buyerPincode = localStorage.getItem("_p_pcode");
      if (buyerPincode) {
        const servicibilityDetails = await getServicibilityDetails(
          authToken,
          buyerPincode,
          false
        );

        if (
          servicibilityDetails?.data[0]?.courier_response?.promise_edd &&
          servicibilityDetails?.data[0]?.courier_response?.promise_edd !== "NA"
        ) {
          edd_days = getPromiseNumberOfDays(
            servicibilityDetails?.data[0]?.courier_response?.promise_edd
          );
          edd_displayed =
            getDayOfWeek(
              servicibilityDetails?.data[0]?.courier_response?.promise_edd
            ) +
            ", " +
            servicibilityDetails?.data[0]?.courier_response?.promise_edd;
          renderOnlyServicableData(servicibilityDetails, buyerPincode);

          localStorage.setItem(
            "_p_edd",
            getDayOfWeek(
              servicibilityDetails?.data[0]?.courier_response?.promise_edd
            ) +
              ", " +
              servicibilityDetails?.data[0]?.courier_response?.promise_edd
          );
        } else {
          renderOnlyCheckServiceData();
        }

        // if (globalCheckActiveDetails?.data?.[0]?.info?.brand_name) {
        //  if(promiseABVersion==="B")
        //  renderPromiseSellerDetails();
        // }
      } else if (!buyerPincode) {
        // const sellerDetails =
        //   localStorage.getItem("_p_buzz_info") &&
        //   new Date().getTime() <
        //     JSON.parse(localStorage.getItem("_p_buzz_info"))
        //       ?.expirationTime
        //     ? JSON.parse(localStorage.getItem("_p_buzz_info"))?.value
        //     : await getPromiseSellerDetails(authToken);
        //if (globalCheckActiveDetails?.data?.[0]?.info?.brand_name) {
        // if(promiseABVersion==="B")
        //   renderPromiseSellerDetails()

        //}
        const systemIPAddress = await getPromiseSystemIP();
        if (systemIPAddress?.query) {
          if (systemIPAddress?.zip) {
            localStorage.setItem("_p_pcode", systemIPAddress?.zip);
            const servicibilityDetails = await getServicibilityDetails(
              authToken,
              systemIPAddress?.zip,
              false
            );

            if (
              servicibilityDetails?.data[0]?.courier_response?.promise_edd &&
              servicibilityDetails?.data[0]?.courier_response?.promise_edd !==
                "NA"
            ) {
              edd_days = getPromiseNumberOfDays(
                servicibilityDetails?.data[0]?.courier_response?.promise_edd
              );
              edd_displayed =
                getDayOfWeek(
                  servicibilityDetails?.data[0]?.courier_response?.promise_edd
                ) +
                ", " +
                servicibilityDetails?.data[0]?.courier_response?.promise_edd;
              renderOnlyServicableData(
                servicibilityDetails,
                systemIPAddress?.zip
              );

              localStorage.setItem(
                "_p_edd",
                getDayOfWeek(
                  servicibilityDetails?.data[0]?.courier_response?.promise_edd
                ) +
                  ", " +
                  servicibilityDetails?.data[0]?.courier_response?.promise_edd
              );
            } else {
              renderOnlyCheckServiceData();
            }
          }
        } else {
          renderOnlyCheckServiceData();
        }
      }
      if (
        /^\/(?:products|collections\/[^/]+\/products)\/[^/]+/.test(
          window.location.pathname
        )
      ) {
        callGAEvent("PDP loaded", {});

        if (isABTestEnabled === true) {
          if (promiseABVersion === "A") {
            callGAEvent("PDP loaded with A", {});
          } else if (promiseABVersion === "B") {
            callGAEvent("PDP loaded with B", {});
          } else {
            callGAEvent("PDP loaded with C", {});
          }
        }
      }
    } else {
      if (
        document.querySelectorAll(".promise-product-page") &&
        promiseABVersion != "C"
      ) {
        const orderDetails = document.querySelectorAll(".promise-product-page");
        orderDetails.forEach((image) => {
          image.innerHTML = null;
        });
        const featureDetails = document.querySelectorAll(".promise-company-features");
        featureDetails.forEach((image) => {
          image.innerHTML = null;
        });
      }
    }
  }
}
};
promiseDOMContentLoaded();
function getDayOfWeek(date) {
  const inputDate = new Date(date);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (inputDate.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = inputDate.getDay();
  return daysOfWeek[dayIndex];
}
function closePromisePopup() {
  if (promiseABVersion === "A") {
    var element = document.getElementsByClassName("promise-overlay-bg")[0];
    element.classList.add("display-none");
  } else {
    var element = document.getElementsByClassName("promise-overlay-bg")[0];
    element.classList.add("display-none");
  }
}
function openPromisePopup(source) {
  if (is_whitelabeling_enabled) return
  if (promiseABVersion === "A") {
    if (source) {
      callGAEvent("Clicked On " + source, {});
      let promiseHeading = promisePopUpContent[source].title;
      let promiseContent = promisePopUpContent[source].content;
      if (source === "default") {
        promiseContent = promiseContent.replace(
          "{{years}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.years_of_experience
        );
        promiseContent = promiseContent.replace(
          "{{happy_customers}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.happy_customers
        );
        promiseContent = promiseContent.replace(
          "{{successful_shipments}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.products_sold
        );
      } else if (source === "refund_return") {
        promiseContent = promiseContent.replace(
          "{{X}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.return_days
        );
        promiseHeading = promiseHeading.replace(
          "{{X}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.return_days
        );
      }
      document.getElementById("promise-popup-heading").innerHTML =
        promiseHeading;
      document.getElementById("promise-popup-content").innerHTML =
        promiseContent;
    }
    var element = document.getElementsByClassName("promise-overlay-bg")[0];
    element.classList.remove("display-none");
  } else {
    if (source) {
      callGAEvent("Clicked On " + source, {});
      let promiseHeading = promisePopUpContent[source].title;
      let promiseContent = promisePopUpContent[source].content;
      if (source === "default" ) {
        promiseContent = promiseContent.replace(
          "{{years}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.years_of_experience
        );
        promiseContent = promiseContent.replace(
          "{{happy_customers}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.happy_customers
        );
        promiseContent = promiseContent.replace(
          "{{successful_shipments}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.products_sold
        );
      } else if (source === "refund_return") {
        promiseContent = promiseContent.replace(
          "{{X}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.return_days
        );
        promiseHeading = promiseHeading.replace(
          "{{X}}",
          globalCheckActiveDetails?.data?.[0]?.extra_settings?.return_days
        );
      }
      document.getElementById("promise-popup-heading").innerHTML =
        promiseHeading;
      document.getElementById("promise-popup-content").innerHTML =
        promiseContent;
    }
    var element = document.getElementsByClassName("promise-overlay-bg")[0];
    element.classList.remove("display-none");
  }
}
const pincodeComponent = `<div class="input-container" id="pincode-input-container">
  <input type="text" id="promise-enter-pincode-input" placeholder="Pincode" class="flex-one" maxLength=6 />
  <button class="flex-one" onclick="applyPromisePincode()">Check Delivery Date</button>
  <div class="flex-basic-100 d-none" id="promise-input-error-msg"></div>
</div>`;
function editPromisePincode() {
  if (promiseABVersion === "A") {
    callGAEvent("Clicked on Edit Pincode", {});
    document.getElementById(
      "enter-pincode"
    ).innerHTML = ` <div style="    font-size: 14px;
  font-weight: bold;    margin-top: 12px;">
      Enter Pincode
  </div>
  <div class="promise-flexbox" style="align-items: baseline;"> <div style="width: 250px;margin-top: 11px;"><input  id="promise-enter-pincode-input" style="border: 1px solid gainsboro;
  width: 100%;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif !important;
  background: #80808017;
  color: gray;
  padding-left: 10px;" maxlength="6"/><div id="promise-input-error-msg" style="
    font-size: 12px;
    color: #D82C0D;
    line-height: 22px;white-space: nowrap;"></div></div>
    <div style="    height: 27px;
    width: 71px;
    border: none;
    color: white;
    background: #6e7cc3;
    margin-left: 7px;
    padding: 6px 13px;
    font-size: 12px;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 12px;
    white-space: nowrap;
    box-sizing: border-box;" onclick="applyPromisePincode()">Change</div></div>`;
    document
      .getElementById("promise-enter-pincode-input")
      .addEventListener("keydown", handlePromiseInputKeyPress);
  } else if (promiseABVersion === "D") {
    callGAEvent("Clicked on Edit Pincode", {});
    document.getElementById(
      "enter-pincode"
    ).innerHTML = pincodeComponent;
    document
      .getElementById("promise-enter-pincode-input")
      .addEventListener("keydown", handlePromiseInputKeyPress);
    setTimeout(() => {
      document.getElementById("promise-enter-pincode-input").focus();
    }, 10);
  } else {
    callGAEvent("Clicked on Edit Pincode", {});
    document.getElementById(
      "enter-pincode"
    ).innerHTML = ` <div style="    font-size: 14px;
    font-weight: bold;    margin-top: 12px;">
        Enter Pincode
    </div>
    <div class="promise-flexbox" style="align-items: baseline;"> <div style="width: 250px;margin-top: 11px;"><input  id="promise-enter-pincode-input" style="border: 1px solid gainsboro;
    width: 100%;
    height: 30px;
    font-family: Arial, Helvetica, sans-serif !important;
    background: #80808017;
    color: gray;
    padding-left: 10px;" maxlength="6"/><div id="promise-input-error-msg" style="
      font-size: 12px;
      color: #D82C0D;
      line-height: 22px;white-space: nowrap;"></div></div>
      <div style="    height: 27px;
      width: 71px;
      border: none;
      color: white;
      background: #6e7cc3;
      margin-left: 7px;
      padding: 6px 13px;
      font-size: 12px;
      border-radius: 2px;
      cursor: pointer;
      margin-right: 12px;
      white-space: nowrap;
      box-sizing: border-box;" onclick="applyPromisePincode()">Change</div></div>`;
    document
      .getElementById("promise-enter-pincode-input")
      .addEventListener("keydown", handlePromiseInputKeyPress);
  }
}
async function applyPromisePincode() {
  _checkPincodeContainsOnlyFiveNumbers = () => {
    // return !/^[1-9][0-9]{5}$/.test(
    return /^[1-9][0-9]{5}$/.test(
      document.getElementById("promise-enter-pincode-input").value
    )
  };
  if (promiseABVersion === "A") {
    if (
      !/^[1-9][0-9]{5}$/.test(
        document.getElementById("promise-enter-pincode-input").value
      )
    ) {
      setTimeout(() => {
        document.getElementById("promise-enter-pincode-input").style.border =
          "1px solid red";
        document.getElementById("promise-input-error-msg").innerHTML =
          "Invalid Pincode!";
      }, 100);
    } else {
      const sellerEmail = document
        .getElementById("promise-overlay")
        ?.getAttribute("seller-email")
        ? document
            .getElementById("promise-overlay")
            ?.getAttribute("seller-email")
        : "";
      const authToken = globalAuthToken
        ? globalAuthToken
        : localStorage.getItem("_p_token") &&
          new Date().getTime() <
            JSON.parse(localStorage.getItem("_p_token"))?.expirationTime
        ? JSON.parse(localStorage.getItem("_p_token"))?.value
        : await getSellerAuthToken(sellerEmail);
      // const sellerDetails = globalSellerDetails ? globalSellerDetails :
      //   localStorage.getItem("_p_buzz_info") &&
      //   new Date().getTime() <
      //     JSON.parse(localStorage.getItem("_p_buzz_info"))
      //       ?.expirationTime
      //     ? JSON.parse(localStorage.getItem("_p_buzz_info"))?.value
      //     : await getPromiseSellerDetails(authToken);
      const servicibilityDetails = await getServicibilityDetails(
        authToken,
        document.getElementById("promise-enter-pincode-input").value,
        true
      );

      if (
        servicibilityDetails?.data[0]?.courier_response?.promise_edd &&
        servicibilityDetails?.data[0]?.courier_response?.promise_edd !== "NA"
      ) {
        localStorage.setItem(
          "_p_pcode",
          document.getElementById("promise-enter-pincode-input").value
        );
        edd_days = getPromiseNumberOfDays(
          servicibilityDetails?.data[0]?.courier_response?.promise_edd
        );
        edd_displayed =
          getDayOfWeek(
            servicibilityDetails?.data[0]?.courier_response?.promise_edd
          ) +
          ", " +
          servicibilityDetails?.data[0]?.courier_response?.promise_edd;
        localStorage.setItem(
          "_p_edd",
          getDayOfWeek(
            servicibilityDetails?.data[0]?.courier_response?.promise_edd
          ) +
            ", " +
            servicibilityDetails?.data[0]?.courier_response?.promise_edd
        );
        callGAEvent("EDD displayed", {
          delivery_pincode: document.getElementById(
            "promise-enter-pincode-input"
          ).value,
          edd_presented:
            servicibilityDetails?.data[0]?.courier_response?.promise_edd,
        });
        document.getElementById(
          "enter-pincode"
        ).innerHTML = ` <div class="promise-flexbox" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color === "default"?"#5968BE":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color};margin-top:13px;margin-bottom: 13px;"><img
  src="https://sr-cdn.shiprocket.in/sr-promise/images/location.png" style="height: 14px;
  margin-top: 1px;    margin-left: 8px;width: auto;
  " />
  <div style="font-size:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="default"?"13px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="sm"?"12px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="md"?"14px":"15px"};margin-left: 6px; font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].font} !important">Deliver to ${ 
    servicibilityDetails?.data[0]?.postcode_info?.city ? 
    servicibilityDetails?.data[0]?.postcode_info?.city.charAt(0).toUpperCase() +
    servicibilityDetails?.data[0]?.postcode_info?.city.slice(1) + " - " : ""
  }${
          document.getElementById("promise-enter-pincode-input").value
        }</div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/edit-icon.png" style="height: 13px;
  margin-left: 6px;
  margin-top: 1px;cursor: pointer; width: auto;" onclick="editPromisePincode()" />
  </div>`;
        document.getElementById(
          "delivery-msg"
        ).innerHTML = ` <div class="promise-flexbox" style="margin-top:13px"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/box-icon.png" style="
  height: 14px;
  margin-top: 1px;
  margin-right: 5px;
  width: auto;
  " />
  <div class="promise-theme2-text" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color=="default"?"black":globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color};font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">Get it by <span style="font-weight:600;float:inherit;font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">${getDayOfWeek(
    servicibilityDetails?.data[0]?.courier_response?.promise_edd
  )},
      
 
      ${
        servicibilityDetails?.data[0]?.courier_response?.promise_edd
      }</span> ${is_whitelabeling_enabled? "" : "with"} </div> ${is_whitelabeling_enabled? "" : '<div class="promise-flexbox" style="cursor: pointer;" onclick="openPromisePopup("default")" ><div class="circle-container"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/with-bg.svg" style="margin: 2px;height: 16px;margin-top: 0px; width: auto;"><div class="circle-animation"></div></div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-text.svg" style="height: 9px;margin-top: 5px;margin-left: 2px; width: auto;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/info.png" style="height: 9px;margin-top: 5px;margin-left: 4px;width: auto;"></div>'}
  </div>`;
        document.getElementById("sr-icon").innerHTML = null;
      } else {
        document.getElementById("promise-enter-pincode-input").style.border =
          "1px solid red";
        document.getElementById("promise-input-error-msg").innerHTML =
          "Pincode not serviceable!";
      }
    }
  } else if (promiseABVersion === "D") { 
    if (!_checkPincodeContainsOnlyFiveNumbers()) {
      setTimeout(() => {
        
        document.getElementById("pincode-input-container").style.border = "1px solid red";
          // document.getElementById("promise-enter-pincode-input").style.border =
          //   "1px solid red";
          document.getElementById("promise-input-error-msg").innerHTML =
            "Invalid Pincode!";
        }, 100);
      } else {
        const sellerEmail = document
          .getElementById("promise-overlay")
          ?.getAttribute("seller-email")
          ? document
              .getElementById("promise-overlay")
              ?.getAttribute("seller-email")
          : "";
        const authToken = globalAuthToken
          ? globalAuthToken
          : localStorage.getItem("_p_token") &&
            new Date().getTime() <
              JSON.parse(localStorage.getItem("_p_token"))?.expirationTime
          ? JSON.parse(localStorage.getItem("_p_token"))?.value
          : await getSellerAuthToken(sellerEmail);
        const servicibilityDetails = await getServicibilityDetails(
          authToken,
          document.getElementById("promise-enter-pincode-input").value,
          true
        );
        const promiseEdd = servicibilityDetails?.data[0]?.courier_response?.promise_edd;

        if (promiseEdd && promiseEdd !== "NA") {
          const buyerPincode = document?.getElementById("promise-enter-pincode-input")?.value;
          const edd_displayed = getDayOfWeek(promiseEdd) + ", " + promiseEdd;
          localStorage.setItem("_p_pcode", buyerPincode);
          localStorage.setItem("_p_edd", edd_displayed);
          deliverablePincodeComponent(servicibilityDetails);
          renderEddComponent(servicibilityDetails, buyerPincode);
          callGAEvent("EDD displayed", {
            delivery_pincode: buyerPincode,
            edd_presented:
              servicibilityDetails?.data[0]?.courier_response?.promise_edd,
          });
        } else {
          document.getElementById("pincode-input-container").style.border = "1px solid red";
          // document.getElementById("promise-enter-pincode-input").style.border =
          //   "1px solid red";
          document.getElementById("promise-input-error-msg").innerHTML =
            "Pincode not serviceable!";
        }
      }
  } else {
    if (
      !/^[1-9][0-9]{5}$/.test(
        document.getElementById("promise-enter-pincode-input").value
      )
    ) {
      setTimeout(() => {
        document.getElementById("promise-enter-pincode-input").style.border =
          "1px solid red";
        document.getElementById("promise-input-error-msg").innerHTML =
          "Invalid Pincode!";
      }, 100);
    } else {
      const sellerEmail = document
        .getElementById("promise-overlay")
        ?.getAttribute("seller-email")
        ? document
            .getElementById("promise-overlay")
            ?.getAttribute("seller-email")
        : "";
      const authToken = globalAuthToken
        ? globalAuthToken
        : localStorage.getItem("_p_token") &&
          new Date().getTime() <
            JSON.parse(localStorage.getItem("_p_token"))?.expirationTime
        ? JSON.parse(localStorage.getItem("_p_token"))?.value
        : await getSellerAuthToken(sellerEmail);
      // const sellerDetails = globalSellerDetails ? globalSellerDetails :
      //   localStorage.getItem("_p_buzz_info") &&
      //   new Date().getTime() <
      //     JSON.parse(localStorage.getItem("_p_buzz_info"))
      //       ?.expirationTime
      //     ? JSON.parse(localStorage.getItem("_p_buzz_info"))?.value
      //     : await getPromiseSellerDetails(authToken);
      const servicibilityDetails = await getServicibilityDetails(
        authToken,
        document.getElementById("promise-enter-pincode-input").value,
        true
      );

      if (
        servicibilityDetails?.data[0]?.courier_response?.promise_edd &&
        servicibilityDetails?.data[0]?.courier_response?.promise_edd !== "NA"
      ) {
        localStorage.setItem(
          "_p_pcode",
          document.getElementById("promise-enter-pincode-input").value
        );
        edd_days = getPromiseNumberOfDays(
          servicibilityDetails?.data[0]?.courier_response?.promise_edd
        );
        edd_displayed =
          getDayOfWeek(
            servicibilityDetails?.data[0]?.courier_response?.promise_edd
          ) +
          ", " +
          servicibilityDetails?.data[0]?.courier_response?.promise_edd;
        localStorage.setItem(
          "_p_edd",
          getDayOfWeek(
            servicibilityDetails?.data[0]?.courier_response?.promise_edd
          ) +
            ", " +
            servicibilityDetails?.data[0]?.courier_response?.promise_edd
        );
        callGAEvent("EDD displayed", {
          delivery_pincode: document.getElementById(
            "promise-enter-pincode-input"
          ).value,
          edd_presented:
            servicibilityDetails?.data[0]?.courier_response?.promise_edd,
        });
        document.getElementById(
          "enter-pincode"
        ).innerHTML = ` <div class="promise-flexbox" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color === "default"?"#5968BE":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].color};margin-top:13px;margin-bottom: 13px;"><img
  src="https://sr-cdn.shiprocket.in/sr-promise/images/location.png" style="height: 14px;
  margin-top: 1px;    margin-left: 8px; width: auto;
  " />
  <div style="font-size:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="default"?"13px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="sm"?"12px":globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"]?.["font-size"]==="md"?"14px":"15px"};margin-left: 6px;font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["location_text"].font} !important ">Deliver to ${ 
    servicibilityDetails?.data[0]?.postcode_info?.city ? 
    servicibilityDetails?.data[0]?.postcode_info?.city.charAt(0).toUpperCase() +
    servicibilityDetails?.data[0]?.postcode_info?.city.slice(1) + " - " : ""
  }${
          document.getElementById("promise-enter-pincode-input").value
        }</div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/edit-icon.png" style="height: 13px;
  margin-left: 6px;
  margin-top: 1px;cursor: pointer; width: auto;" onclick="editPromisePincode()" />
  </div>`;
        document.getElementById(
          "delivery-msg"
        ).innerHTML = ` <div class="promise-flexbox" style="margin-top:13px"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/box-icon.png" style="
  height: 14px;
  margin-top: 1px;
  margin-right: 5px;
  width: auto;
  " />
  <div class="promise-theme2-text" style="color:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color=="default"?"white":globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].color};font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">Get it by <span style="font-weight:600;float:inherit;font-family:${globalCheckActiveDetails?.data?.[0]?.extra_info?.["serviceability_text"].font} !important">${getDayOfWeek(
    servicibilityDetails?.data[0]?.courier_response?.promise_edd
  )},
      
 
      ${
        servicibilityDetails?.data[0]?.courier_response?.promise_edd
      }</span> ${is_whitelabeling_enabled? "" : "with"} </div> ${is_whitelabeling_enabled? "" : '<div class="promise-flexbox" style="cursor: pointer;" onclick="openPromisePopup("default")"><div class="circle-container"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/with-bg.svg" style="margin: 2px;height: 16px;margin-top: 0px; width: auto;"><div class="circle-animation"></div></div><img src="https://sr-cdn.shiprocket.in/sr-promise/images/sr-text.svg" style="height: 9px;margin-top: 5px;margin-left: 2px; width: auto;"><img src="https://sr-cdn.shiprocket.in/sr-promise/images/info.png" style="height: 9px;margin-top: 5px;margin-left: 4px;width: auto;"></div>'}
  </div>`;
        document.getElementById("sr-icon").innerHTML = null;
      } else {
        document.getElementById("promise-enter-pincode-input").style.border =
          "1px solid red";
        document.getElementById("promise-input-error-msg").innerHTML =
          "Pincode not serviceable!";
      }
    }
  }
}

function openEditPincode() {
  // Todo : Deprecated . Only declared not used anywhere
  callGAEvent("Clicked on Edit Pincode", {});
  const enterPincodeHtml = `<div class="promise-flexbox" style="align-items: baseline;"><div style="line-height: 22px;white-space: nowrap;" class="pro-tag-text"> Edit Pincode</div> <div style="width: 50%;margin-left: 10px;"><input  id="promise-enter-pincode-input" style="border: 1px solid gainsboro; 
  width:100%;
  height: 30px;font-family: Arial, Helvetica, sans-serif !important;" maxlength="6"/><div id="promise-input-error-msg" style="
font-size: 12px;
color: #D82C0D;
line-height: 22px;white-space: nowrap;"></div></div><div style=" height: 30px;
width: 66px;
border: none;
color: white;
background: #2C1566;
margin-left: 12px;
padding: 6px 16px;
font-size: 14px;
border-radius: 2px;
cursor: pointer;    margin-right: 12px;white-space: nowrap" onclick="applyPromisePincode()">Apply</div></div>`;
  document.getElementById("promise-edit-pincode").innerHTML = enterPincodeHtml;
  document
    .getElementById("promise-enter-pincode-input")
    .addEventListener("keydown", handlePromiseInputKeyPress);
}

// Shimmer Components starts here 

const shimmerComponent = () => {
  return `<div class="shine shimmer-lines"></div>`;
};
const showShimmer = () => {
  toggleShimmerVisibility();
};
const hideShimmer = () => {
  toggleShimmerVisibility();
};
const toggleShimmerVisibility = () => {
  const shimmerList = document.getElementsByClassName('shine shimmer-lines');
  if (shimmerList && shimmerList.length) {
    // as get will return HTMLCollection. So first need to convert them in js array for applying forEach on them
    Array.from(shimmerList).forEach((shimmer) => shimmer.classList.toggle('d-none'));
  }
};
// Shimmer Components ends here 


// Constants Start Here 
const COLOR= {
  BADGE_DEFAULT_COLOR: '#5968BE',
}
// Constants Ends Here 

/**
 *  SVG's starts here  
 **/
const upArrowSVG = `<svg class="top-pointing-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
  <path d="M8.80706 0.825109C9.19788 0.192752 10.1175 0.192749 10.5084 0.825106L18.1797 13.2376C18.5915 13.9038 18.1123 14.7633 17.3291 14.7633H1.98636C1.20318 14.7633 0.723965 13.9038 1.13571 13.2376L8.80706 0.825109Z" fill="#F5F7FA" />
</svg>`;
const handBagSVG = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1636_2421)">
                        <path d="M3.37711 15.8725L3.41655 15.8932L8.37783 18.4927L8.379 18.4933C8.82298 18.7411 9.36487 18.7375 9.80718 18.4835L3.37711 15.8725ZM3.37711 15.8725L3.35203 15.9093C3.29335 15.9954 3.19598 16.0516 3.08398 16.0516H0.458984C0.278555 16.0516 0.133984 15.9062 0.133984 15.7266V9.72656C0.133984 9.54691 0.278555 9.40156 0.458984 9.40156H3.08398C3.2627 9.40156 3.40898 9.54707 3.40898 9.72656V9.77656H3.45898H6.64648C6.92023 9.77656 7.18844 9.8538 7.41849 9.99943L7.4186 9.9995L12.0705 12.9277C12.2952 13.0692 12.4673 13.2626 12.5815 13.4825L12.6055 13.5289L12.6508 13.5028L15.8608 11.6571C15.8608 11.6571 15.8608 11.6571 15.8608 11.6571C16.555 11.2582 17.4413 11.4976 17.84 12.1912L17.84 12.1913C18.2406 12.8851 18.0014 13.7721 17.3072 14.171L17.3321 14.2144L17.3072 14.171L9.80721 18.4835L3.37711 15.8725ZM3.40898 10.4266H3.45898H6.64648C6.79655 10.4266 6.94449 10.4692 7.07243 10.5495L7.07248 10.5496L11.7224 13.4777L3.40898 10.4266ZM3.40898 10.4266V10.4766M3.40898 10.4266V10.4766M3.40898 10.4766V15.1247V15.1549M3.40898 10.4766V15.1549M3.40898 15.1549L3.43578 15.169M3.40898 15.1549L3.43578 15.169M3.43578 15.169L8.68058 17.9175M3.43578 15.169L8.68058 17.9175M8.68058 17.9175C8.6834 17.9194 8.68582 17.9207 8.68726 17.9215C8.68957 17.9228 8.69184 17.9239 8.6938 17.9248C8.93943 18.0621 9.2386 18.0604 9.48207 17.9201L16.982 13.6077L16.982 13.6077L16.9571 13.5643C17.3171 13.3579 17.4409 12.8991 17.2346 12.5402L8.68058 17.9175ZM6.04772 12.1781L6.04752 12.1784C5.95165 12.3302 5.99716 12.531 6.14811 12.6265L6.04772 12.1781ZM6.04772 12.1781C6.14173 12.0267 6.34308 11.9809 6.49412 12.0766L6.49423 12.0766M6.04772 12.1781L6.49423 12.0766M6.49423 12.0766L10.8705 14.8317L10.8705 14.8318M6.49423 12.0766L10.8705 14.8318M10.8705 14.8318C11.2445 15.067 11.7384 14.9545 11.9744 14.581L11.9745 14.5808M10.8705 14.8318L11.9745 14.5808M11.9745 14.5808C12.0744 14.4208 12.1124 14.2383 12.0924 14.0634L12.0942 14.0632M11.9745 14.5808L12.0942 14.0632M12.0942 14.0632L12.0909 14.0547M12.0942 14.0632L12.0909 14.0547M12.0909 14.0547C12.0909 14.0547 12.0909 14.0547 12.0909 14.0546H12.0914L12.0904 14.0476C12.0584 13.8214 11.9326 13.6093 11.7225 13.4778L12.0909 14.0547ZM16.1859 12.2205L12.7697 14.184L12.7459 14.1976L12.7447 14.2251C12.7338 14.4663 12.6614 14.7082 12.5236 14.9272L12.5235 14.9273C12.0976 15.6045 11.2023 15.8081 10.5244 15.3818C10.5244 15.3818 10.5244 15.3818 10.5244 15.3818L6.14819 12.6266L16.1859 12.2205ZM2.70898 15.4016H2.75898V15.3516V15.3471V10.1016V10.0516H2.70898H0.833984H0.783984V10.1016V15.3516V15.4016H0.833984H2.70898ZM6.69524 3.40156H6.7371L6.74446 3.36035C7.00653 1.89165 8.29113 0.776563 9.83398 0.776563C11.3787 0.776563 12.6614 1.89164 12.9235 3.36035L12.9309 3.40156H12.9727H14.5215C14.6889 3.40156 14.8302 3.5299 14.8448 3.69698L14.8448 3.69716L15.518 11.0888C15.5342 11.267 15.401 11.4256 15.222 11.4419L15.2219 11.4419C15.0451 11.4581 14.8857 11.3262 14.8694 11.1476L14.2281 4.09703L14.224 4.05156H14.1783H13.0215H12.9715V4.10156V5.60156C12.9715 5.78088 12.8252 5.92656 12.6465 5.92656C12.4678 5.92656 12.3215 5.78088 12.3215 5.60156V4.10156V4.05156H12.2715H7.39648H7.34648V4.10156V5.60156C7.34648 5.78088 7.20018 5.92656 7.02148 5.92656C6.84278 5.92656 6.69648 5.78088 6.69648 5.60156V4.10156V4.05156H6.64648H5.48962H5.44396L5.43983 4.09704L4.99356 9.00597C4.97732 9.18436 4.81807 9.31653 4.63914 9.30027C4.46043 9.28402 4.32877 9.12575 4.34502 8.94716L4.82315 3.69716L4.82317 3.69698C4.83777 3.5299 4.97906 3.40156 5.14648 3.40156H6.69524ZM12.2058 3.40156H12.269L12.2545 3.3401C11.9962 2.24307 11.0108 1.42656 9.83398 1.42656C8.65716 1.42656 7.67178 2.24307 7.41346 3.3401L7.39899 3.40156H7.46213H12.2058Z" fill="#263238" stroke="white" stroke-width="0.1" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1636_2421">
                          <rect width="18" height="18" fill="white" transform="translate(0.0839844 0.726562)" />
                        </clipPath>
                      </defs>
                    </svg>`;
const shiprocketSVG = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1636_2414)">
                  <path d="M12.6946 2.43625L7.20318 0.788793C7.12629 0.765715 7.04434 0.765715 6.96743 0.788793L1.47587 2.43625C1.3024 2.48829 1.18359 2.64798 1.18359 2.8291V8.86977C1.18359 9.65547 1.50168 10.4598 2.12898 11.2603C2.60807 11.8717 3.27091 12.4857 4.09901 13.0851C5.49018 14.0921 6.86007 14.7099 6.91772 14.7357C6.97101 14.7595 7.02816 14.7715 7.08531 14.7715C7.14245 14.7715 7.1996 14.7596 7.2529 14.7357C7.31051 14.7099 8.68038 14.0921 10.0715 13.0851C10.8996 12.4857 11.5625 11.8717 12.0416 11.2603C12.6689 10.4598 12.9869 9.6555 12.9869 8.86977V2.8291C12.9869 2.64798 12.8682 2.48829 12.6946 2.43625Z" fill="#4A0C9C" />
                  <path d="M9.58318 5.9774C9.54854 5.94248 9.50733 5.91476 9.46193 5.89584C9.41652 5.87693 9.36782 5.86719 9.31864 5.86719C9.26945 5.86719 9.22075 5.87693 9.17535 5.89584C9.12994 5.91476 9.08874 5.94248 9.0541 5.9774L6.2783 8.75692L5.11209 7.58699C5.07613 7.55225 5.03368 7.52493 4.98716 7.5066C4.94064 7.48827 4.89096 7.47928 4.84097 7.48014C4.79097 7.48101 4.74164 7.49171 4.69578 7.51164C4.64992 7.53157 4.60844 7.56034 4.5737 7.5963C4.53896 7.63227 4.51165 7.67472 4.49331 7.72124C4.47498 7.76776 4.46599 7.81743 4.46685 7.86743C4.46772 7.91742 4.47842 7.96676 4.49835 8.01262C4.51828 8.05847 4.54705 8.09996 4.58302 8.1347L6.01376 9.56544C6.0484 9.60036 6.08961 9.62808 6.13501 9.647C6.18042 9.66592 6.22912 9.67565 6.2783 9.67565C6.32749 9.67565 6.37619 9.66592 6.42159 9.647C6.46699 9.62808 6.5082 9.60036 6.54284 9.56544L9.58318 6.52511C9.621 6.49022 9.65118 6.44787 9.67182 6.40074C9.69247 6.35361 9.70312 6.30271 9.70312 6.25125C9.70312 6.1998 9.69247 6.1489 9.67182 6.10177C9.65118 6.05463 9.621 6.01229 9.58318 5.9774Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1636_2414">
                    <rect width="14" height="14" fill="white" transform="translate(0.0839844 0.771484)" />
                  </clipPath>
                </defs>
          </svg>`;

/**
 *  SVG's ends here  
 **/
