var __defProp$7 = Object.defineProperty;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$7 = (obj, key, value) => __defNormalProp$7(obj, key + "" , value);
class Donation_api {
  constructor() {
  }
  static format({
    success,
    message,
    status,
    data
  }) {
    return {
      success,
      message,
      status,
      data
    };
  }
  static reformat_single_country({ country, donation_data_profile }) {
    return {
      countries: {
        [country]: {
          persons: {
            datas: [
              { ...donation_data_profile }
            ]
          }
        }
      }
    };
  }
  static reformat_mass_country({ country_Data }) {
    return {
      countries: country_Data
    };
  }
  static paginate({ data_per_page_count, datas }) {
    const data_per_page = data_per_page_count;
    const page_tracker = {};
    let res_datas_global_paginate = { countries: {} };
    Object.entries(datas.countries || {}).forEach(([country_name, data_persons]) => {
      var _a;
      const person_list = ((_a = data_persons.persons) == null ? void 0 : _a.datas) || [];
      if (!res_datas_global_paginate.countries[country_name]) {
        res_datas_global_paginate.countries[country_name] = { persons: { datas: {} } };
      }
      if (!page_tracker[country_name]) {
        page_tracker[country_name] = 0;
      }
      person_list.forEach((person) => {
        const curent_data_count = page_tracker[country_name];
        const page_numb = Math.floor(curent_data_count / data_per_page) + 1;
        const key_numb = `page_${page_numb}`;
        const target_data = res_datas_global_paginate.countries[country_name].persons.datas;
        if (!target_data[key_numb]) {
          target_data[key_numb] = [];
        }
        target_data[key_numb].push(person);
        page_tracker[country_name]++;
      });
    });
    return res_datas_global_paginate;
  }
  static sql_syntaxs({ query, data, tabel_name }) {
    var _a;
    const rules = {
      selected_fields: /([a-zA-Z_,]+)|(\*)/,
      //todo: sama
      group: /groupBy\(([A-Za-z_]+)\)/
      //!validasi jika bukan string
      //todo: from di urutan 3 dari data terakhir
      //todo: tabel_name di urutan 2 dari data terakhir
      //todo: groupby di urutan data terakhir
    };
    query.replace(/([a-zA-Z_,]+)\s+/, "");
    const array_queries = query.split(" ");
    if (!rules.selected_fields.test(query) || array_queries.indexOf("select") !== 0) return [];
    if (!/\*|[a-zA-Z_,]+/.test(query) || array_queries.indexOf("select") + 1 !== 1) return [];
    if (!/from/.test(query) && array_queries.indexOf("from") !== 2) return [];
    const check_for_tabel_name = array_queries[array_queries.indexOf(tabel_name)];
    if (tabel_name !== check_for_tabel_name && array_queries.indexOf(tabel_name) !== 3) return [];
    if (!rules.group.test(query) || array_queries.length - 1 !== 4) return [];
    const get_keys = ({ rule, data: data2 }) => {
      if (rule === "*") {
        return data2;
      }
      const data_selects = rule.split(",");
      return data2.map(((row) => {
        const new_row = {};
        Object.entries(row).forEach(([key, value]) => {
          if (data_selects.includes(key)) new_row[key] = value;
        });
        return new_row;
      }));
    };
    const q_select = array_queries[array_queries.indexOf("select") + 1];
    const selected_fields_ = q_select === "*" ? get_keys({ data, rule: "*" }) : get_keys({ data, rule: q_select });
    const grouped_data = (_a = query.match(rules.group)) == null ? void 0 : _a[1];
    if (!grouped_data) return [];
    const grouped = selected_fields_ == null ? void 0 : selected_fields_.reduce((acc, row) => {
      const grouped_data_type = row[grouped_data];
      if (grouped_data_type !== void 0) {
        if (!acc[grouped_data_type]) acc[grouped_data_type] = [];
        acc[grouped_data_type].push(row);
      }
      return acc;
    }, {});
    return grouped;
  }
}
__publicField$7(Donation_api, "group_by", ({ group_by, datas }) => {
  const grouped_data = datas.reduce((acc, person, _) => {
    const group_by_key = group_by;
    const country = person[group_by_key];
    if (!acc[country]) {
      acc[country] = {
        persons: { datas: [] }
      };
    }
    acc[country].persons.datas.push(person);
    return acc;
  }, {});
  return grouped_data;
});

var e_data_citizen = /* @__PURE__ */ ((e_data_citizen2) => {
  e_data_citizen2["paypal"] = "donate via paypal";
  e_data_citizen2["donorbox"] = "donate via donorbox";
  e_data_citizen2["spot_fund"] = "donate via spot.fund";
  e_data_citizen2["ko_fi"] = "donate via ko-fi";
  e_data_citizen2["go_fund_me"] = "donate via gofund.me";
  e_data_citizen2["chuffed"] = "donate via chuffed";
  e_data_citizen2["go_get_funding"] = "donate via gogetfunding";
  e_data_citizen2["palestinian_campaign"] = "Palestinian Campaign";
  e_data_citizen2["artwork"] = "support me by purchasing my artwork";
  e_data_citizen2["app"] = "donate to our app";
  e_data_citizen2["instagram"] = "instagram";
  e_data_citizen2["linkedin"] = "linkedin";
  e_data_citizen2["facebook"] = "facebook";
  e_data_citizen2["link_tree"] = "linktree";
  e_data_citizen2["tiktok"] = "tik-tok";
  e_data_citizen2["website"] = "website";
  e_data_citizen2["usdt_binance"] = "USDT Binance";
  e_data_citizen2["yt_short"] = "yt_short";
  e_data_citizen2["yt_long"] = "yt_long";
  e_data_citizen2["none"] = "none";
  return e_data_citizen2;
})(e_data_citizen || {});

var e_status_code = /* @__PURE__ */ ((e_status_code2) => {
  e_status_code2[e_status_code2["NotFoundCode"] = 404] = "NotFoundCode";
  e_status_code2["NotFoundMessage"] = "404 not found";
  e_status_code2[e_status_code2["SuccessCode"] = 200] = "SuccessCode";
  e_status_code2["SuccessMessage"] = "200 ok!";
  e_status_code2[e_status_code2["AcceptedCode"] = 202] = "AcceptedCode";
  e_status_code2["AcceptedMessage"] = "202 accepted";
  e_status_code2[e_status_code2["BadRequestCode"] = 400] = "BadRequestCode";
  e_status_code2["BadRequestMessage"] = "400 bad request";
  e_status_code2[e_status_code2["ServerErrorCode"] = 500] = "ServerErrorCode";
  e_status_code2["ServerErrorMessage"] = "500 internal server error";
  e_status_code2[e_status_code2["TooMuchRequestCode"] = 429] = "TooMuchRequestCode";
  e_status_code2["TooMuchRequestMessage"] = "429 too much request try again later";
  return e_status_code2;
})(e_status_code || {});

var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$6 = (obj, key, value) => __defNormalProp$6(obj, typeof key !== "symbol" ? key + "" : key, value);
const _Universal_api_util = class _Universal_api_util {
  /**
         *@desc Fungsi pembantu untuk memeriksa apakah suatu nilai mengandung text pencarian secara rekursif atau tree traversal
        *@desc intinya menelusuri data object dan array dibongkar setiap valuenya hingga mencapai level primitif data type number boolean string etc
        *@desc dia by default akan menggunakkan logika | kalau di sql seperti where like %what% 
        *@param {string} query 
        *@param {any} value 
  */
  static deep_search({ value, query, skiping_field }) {
    const validate_data = {
      value_is_string: typeof value === "string",
      value_is_array: Array.isArray(value),
      value_is_number: typeof value === "number",
      value_is_object: typeof value === "object"
    };
    if (value === null || value === void 0) return false;
    if (validate_data.value_is_string) {
      return value.toLowerCase().includes(query.toLowerCase());
    }
    if (validate_data.value_is_number) {
      return String(value).toLowerCase().includes(query);
    }
    if (validate_data.value_is_array) {
      return value.some((val) => this.deep_search({ query, value: val, skiping_field }));
    }
    if (validate_data.value_is_object) {
      return Object.entries(value).map(([key, values]) => {
        if (skiping_field.length > 0) {
          if (!skiping_field.includes(key)) {
            return values;
          }
        } else {
          return values;
        }
      }).filter((val) => val !== void 0).some((val) => this.deep_search({ query, value: val, skiping_field }));
    }
    return false;
  }
  static responses({ cb, code }) {
    let status_code_response;
    let message_response;
    let success_response;
    const data_responses = {
      200: {
        status_code_response: e_status_code.SuccessCode,
        message_response: e_status_code.SuccessMessage,
        success_response: true
      },
      404: {
        status_code_response: e_status_code.NotFoundCode,
        message_response: e_status_code.NotFoundMessage,
        success_response: false
      }
    };
    status_code_response = data_responses[code].status_code_response;
    message_response = data_responses[code].message_response;
    success_response = data_responses[code].success_response;
    cb({
      message_response,
      status_code_response,
      success_response
    });
  }
};
__publicField$6(_Universal_api_util, "get_queries_params", ({ query }) => {
  const {
    q_search_country,
    q_search
  } = query;
  const q_params = {
    q_search_country,
    q_search
  };
  return q_params;
});
__publicField$6(_Universal_api_util, "deep_search2", ({ data, queries, logic = "or", skiping_field }) => {
  const validate_data_type = {
    number: typeof data === "number"
  };
  if (data === null || data === void 0) return false;
  if (Array.isArray(data)) {
    return data.some((valsome) => _Universal_api_util.deep_search2({ data: valsome, queries, logic, skiping_field }));
  }
  if (typeof data === "object" && data != null) {
    const data_arrays = Object.entries(data).reduce((acc, [key, value]) => {
      if (skiping_field.length > 0) {
        if (!skiping_field.includes(key)) {
          acc[key] = value;
        }
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});
    //! todo: refaktor jadi deepsearch bongkar jadi primitif value dibongkar 1 per 1 lalu dicocokan strict misal id == id saat menyentuh type data primitif
    const search_datas_criteria = Object.entries(queries);
    const check_matching = (criteria) => {
      const [keyEntry, valueEntry] = criteria;
      if (typeof valueEntry === "object" && valueEntry !== null && "k" in valueEntry) {
        const actualValue2 = data_arrays[valueEntry.k];
        if (actualValue2 === void 0) return false;
        if (valueEntry.k === "id") {
          return actualValue2.toString() === valueEntry.v.toString();
        }
        return actualValue2.toString().toLowerCase().includes(valueEntry.v.toString().toLowerCase());
      }
      if (typeof keyEntry !== "number" || typeof keyEntry !== "string") return false;
      const actualValue = data_arrays[keyEntry];
      if (actualValue === void 0) return false;
      if (keyEntry === "id") {
        return actualValue.toString() === valueEntry.toString();
      }
      return actualValue.toString().toLowerCase().includes(valueEntry.toString().toLowerCase());
    };
    let is_match = false;
    if (logic === "and") is_match = search_datas_criteria.every((criteria) => check_matching(criteria));
    if (logic === "or") is_match = search_datas_criteria.some((criteria) => check_matching(criteria));
    if (is_match == true) return true;
    return false;
  }
  if (validate_data_type.number) {
    if (logic === "and") {
      return queries.every((queri) => data == queri);
    }
    if (logic === "or") {
      return queries.some((queri) => data == queri);
    }
  }
  if (typeof data === "string") {
    if (logic === "and") {
      return queries.every((queri) => data.toLowerCase().includes(queri == null ? void 0 : queri.toString()));
    }
    if (logic === "or") {
      return queries.some((queri) => data.toLowerCase().includes(queri == null ? void 0 : queri.toString()));
    }
  }
  return false;
});
let Universal_api_util = _Universal_api_util;

class DonationControllerAbstract {
}

class DonationDatabaseAbstract {
}

class DonationModelAbstract {
}

class DonationRepositoryAbstract {
}

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
class BaseAbstract {
  constructor() {
    __publicField$5(this, "QSearchCountry", ({ cb_response, country, data_models, id, q_params_datas, model_find }) => {
      //! potensi bug kalau country_name search beda misal mahira maka dia akan memunculkan datanya
      const negaras = [];
      for (const data_country of Object.values(model_find.findAll().countries)) {
        Object.values(data_country.persons.datas).forEach((person_data) => {
          if (!negaras.includes(person_data.country_name)) {
            negaras.push(person_data.country_name);
          }
        });
      }
      const country_not_found_q_param_response = ({ validate_country: validate_country2 }) => {
        if (!validate_country2) {
          data_models = model_find.findBy({ param: { not_found: "data not found!" } });
          Universal_api_util.responses({ cb({ message_response, status_code_response, success_response }) {
            cb_response({ data_models, message_response, status_code_response, success_response });
          }, code: 404 });
          return;
        }
      };
      const validate_country = Universal_api_util.deep_search({ value: negaras, query: country, skiping_field: [] });
      if (validate_country && id !== void 0 && country !== "") {
        data_models = model_find.findBy({ param: { country_name: country, id } });
        if (Object.values(data_models.countries).length < 1) {
          data_models = model_find.findBy({ param: { not_found: "data not found!" } });
          Universal_api_util.responses({ cb({ status_code_response, message_response, success_response }) {
            cb_response({ data_models, message_response, status_code_response, success_response });
          }, code: 404 });
        } else {
          Universal_api_util.responses({ cb({ status_code_response, message_response, success_response }) {
            cb_response({ data_models, message_response, status_code_response, success_response });
          }, code: 200 });
        }
      }
      const country_not_found = () => {
        country_not_found_q_param_response({ validate_country });
        if ((q_params_datas == null ? void 0 : q_params_datas.q_search_country) !== void 0) {
          let data_find_by = { id, country_name: q_params_datas == null ? void 0 : q_params_datas.q_search_country };
          if (id === void 0) {
            data_find_by = Object.entries(data_find_by).reduce((acc, [key, value]) => {
              if (key !== "id") acc[key] = value;
              return acc;
            }, {});
          }
          const validate_country_from_q_param = Universal_api_util.deep_search({ value: negaras, query: q_params_datas == null ? void 0 : q_params_datas.q_search_country, skiping_field: [] });
          country_not_found_q_param_response({ validate_country: validate_country_from_q_param });
          data_models = model_find.findBy({ param: data_find_by });
          if (validate_country_from_q_param) {
            Universal_api_util.responses({ cb({ status_code_response, message_response, success_response }) {
              cb_response({ data_models, message_response, status_code_response, success_response });
            }, code: 200 });
          }
        }
      };
      country_not_found();
    });
    __publicField$5(this, "QSearch", ({ cb_response, data_models, q_params_datas, model_find }) => {
      if ((q_params_datas == null ? void 0 : q_params_datas.q_search) !== void 0) {
        data_models = model_find.findAllValueSkipId({ query: q_params_datas.q_search });
        if (Object.values(data_models.countries).length === 0) {
          Universal_api_util.responses({ cb({ message_response, status_code_response, success_response }) {
            cb_response({ message_response, status_code_response, success_response, data_models });
          }, code: 404 });
        } else {
          data_models = model_find.findAllValueSkipId({ query: q_params_datas.q_search });
          Universal_api_util.responses({ cb({ message_response, status_code_response, success_response }) {
            cb_response({ message_response, status_code_response, success_response, data_models });
          }, code: 200 });
        }
      }
    });
  }
}

class DonationServiceAbstract extends BaseAbstract {
}

const data_profile$C = {
  name: "abdul karim",
  story: `My name is Abdul Karim from Palestine. The war took my right leg in one day, leaving me unable to work. I now struggle to feed my wife and our seven children.
We urgently need food, clean water, and medicine for my wound and the children\u2019s malnutrition and illnesses.
Any small donation will help us survive. Please share and support us.
Thank you,
Abdul Karim & family`,
  youtube_channel: {
    src: "https://www.youtube.com/@Abdukarim-d9c/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/l6JuNipZKQ8",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/caKih6kkSllebgeOQrcKcpcF0dUldkmp4xMQ4cKeCJzLGQLGDzY4XNX-kvZCmGUalSvTW4UgTQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.chuffed, url: "https://chuffed.org/project/179557-help-abdul-karims-family-escape-gaza" }
  ]
};
const abdul_karim = {
  name: data_profile$C.name,
  youtube_profile: data_profile$C.youtube_profile,
  youtube_channel: data_profile$C.youtube_channel,
  links: data_profile$C.links,
  image: data_profile$C.image,
  story: data_profile$C.story
};

const data_profile$B = {
  image: "https://yt3.googleusercontent.com/zMObFZwgPYUa_Az8TtGJLpg-T74KQ_M2qHQdSnkUjxLKzqHrNCPZ1X7trBx15u0U2KneHq_8=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.artwork, url: "https://www.supportmyart.shop/products/support-me-by-purchasing-this-artwork-%E2%9D%A4%EF%B8%8F?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASGQ8JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafujouJDYk2KPHXZWcBpUSzJTV7Mhfycxjg7XoKvh8nxaS-bAigHDpE3mhGbQ_aem_0viKLuMF0HXRcVml8esfGA&variant=53201068130632" }
  ],
  name: "abdullah zakaria",
  story: "Our financial situation has worsened beyond our control.Even arranging food has become a daily struggle.Any assistance would mean a great deal to us.",
  youtube_channel: {
    src: "https://www.youtube.com/@Abdullahzakaria-g6w/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/Fiod1bYoZQw",
    type: e_data_citizen.yt_short
  }
};
const abdullah_zakaria = {
  name: data_profile$B.name,
  youtube_profile: data_profile$B.youtube_profile,
  youtube_channel: data_profile$B.youtube_channel,
  links: data_profile$B.links,
  image: data_profile$B.image,
  story: data_profile$B.story
};

const data_profile$A = {
  name: "Alhanaril Gaza community outreach",
  story: "Your a kind person please choose kindness and donate to save millions of Gaza families \u{1F64F}\u{1F64F}\u{1F932}",
  youtube_channel: {
    src: "https://www.youtube.com/@AlhanarilGazacommunityoutreach"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/Je7R2np_ZNI",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/uEBSJ1XsQYYWyYrFyuby4OxGCtvw1QJ5Glf3X0SiM_r0BHJrKT5YAie4f_w-zB0bVls6IEfO=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate/?hosted_button_id=PYJB9SL68JLW6" }
  ]
};
const alhanaril_gaza_community_outreach = {
  name: data_profile$A.name,
  youtube_profile: data_profile$A.youtube_profile,
  youtube_channel: data_profile$A.youtube_channel,
  links: data_profile$A.links,
  image: data_profile$A.image,
  story: data_profile$A.story
};

const data_profile$z = {
  name: "amir_housni",
  story: " We are running out of time\u2026 Gaza peoples are  dying. Please, please help us by donating $20, $50, $70. Your kindness can save there life. Link in bio, please share our story. \u{1F447}",
  youtube_channel: {
    src: "https://www.youtube.com/@amirHousniz"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/eIWdz2QNPiQ",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/t6wXY12ufo_69IZ_0H7Mm7d2KRnjf28e50Dc0R7Oj9quYZMXIdjyA1fyvfL7agKsbDIUY8YnWQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.spot_fund, url: "https://www.spotfund.com/story/04a52948-8833-483f-99d5-fe6e2075643a?SFID=FamilyAya&r=aHR0cHM6Ly93d3cueW91dHViZS5jb20v" }
  ]
};
const amir_housni = {
  name: data_profile$z.name,
  youtube_profile: data_profile$z.youtube_profile,
  youtube_channel: data_profile$z.youtube_channel,
  links: data_profile$z.links,
  image: data_profile$z.image,
  story: data_profile$z.story
};

const data_profile$y = {
  name: "change life in gaza",
  story: `we can't stay silent while Gaza in crying please donate anything you can \u{1F932}\u{1F932}\u{1F64F}\u{1F1EF}\u{1F1F4}\u{1F1EF}\u{1F1F4}`,
  youtube_channel: {
    src: "https://www.youtube.com/@change_life_in_Gaza/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/2vpXPDbAr7Q",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/TG3bzSh-i-Zemmyvp3EOVMuG8gzBrcKyU8jCCQC8KcllM2s5YVTpO8Qo19HWlvPTDEYhcdxp0Q=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.link_tree, url: "https://linktr.ee/kalungiw98" },
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?hosted_button_id=YUNLPRWJQV7XG" }
  ]
};
const change_life_in_gaza = {
  name: data_profile$y.name,
  youtube_profile: data_profile$y.youtube_profile,
  youtube_channel: data_profile$y.youtube_channel,
  links: data_profile$y.links,
  image: data_profile$y.image,
  story: data_profile$y.story
};

const data_profile$x = {
  image: "https://yt3.googleusercontent.com/sIm_6aEiB_Ma9KncYECwSzLYXDZw4ebMTXvEOjpywJrkz6Ga2fOxc_vB-KKcxY3Wy7hx20HrWdk=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.chuffed, url: "https://chuffed.org/" }
  ],
  name: "For HUMANITY",
  story: "This channel has a purpose to stand up for every injustice going on all over the world , use audios of Palestinians as much as possible and uplift their unheard voices to the world.EVERYONE WITH OR WITHOUT A RELIGION HAS A RIGHT TO EXIST EXCEPT THE ONE WHO SPREAD CORRUPTION --> SUBSCRIBE and become the part of this community \u{1F49D}\u2728 Free Palestine\u{1F1F5}\u{1F1F8} Free Sudan \u{1F1F8}\u{1F1E9} ",
  youtube_channel: {
    src: "https://www.youtube.com/@ForHUMANITY-m9j/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/waUWGOUmoKE",
    type: "yt_short"
  }
};
const for_humanity = {
  name: data_profile$x.name,
  youtube_profile: data_profile$x.youtube_profile,
  youtube_channel: data_profile$x.youtube_channel,
  links: data_profile$x.links,
  image: data_profile$x.image,
  story: data_profile$x.story
};

const data_profile$w = {
  name: "gaza care | Mohammed Abdulla and his family",
  story: `Hello My name is Mohammed Abdullah amaza. Please help me raise money for my family. We have lost everything: our home, our safety, and our sense of stability. Today, we are reaching out for your solidarity to help us get through this difficult time. This fundraiser will go toward covering our most urgent needs: food, medical care, clothing, and shelter to keep us safe. Every donation, big or small, is a gesture of hope for us. And if you're unable to contribute financially, even sharing this fundraiser can make a real difference. **Thank you from the bottom of our hearts, Mohammed Abdullah. Amaza`,
  youtube_channel: {
    src: "https://www.youtube.com/@GAZACARE/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/6FQ3Lx2LM1c",
    type: e_data_citizen.yt_short
  },
  image: "https://d1c7drk47yg0al.cloudfront.net/assets/QCf1F9pU1trC0lwaLDl9hvfiHpOZQmcR0qTXZ8HN.jpg?profile=campaign.header_desktop",
  links: [
    { name: e_data_citizen.chuffed, url: "https://chuffed.org/project/174897-help-for-mohammed-abdulla-and-his-family" }
  ]
};
const gaza_care = {
  name: data_profile$w.name,
  youtube_profile: data_profile$w.youtube_profile,
  youtube_channel: data_profile$w.youtube_channel,
  links: data_profile$w.links,
  image: data_profile$w.image,
  story: data_profile$w.story
};

const data_profile$v = {
  name: "gaza family emergency relief",
  story: `On December 23, Firas Abu Raida sent us this message: "I haven't slept. The cold is unbearable. My limbs are trembling from the intense cold. I feel like my body has turned blue from the cold. I'm suffering so much. I'm slowly dying. My limbs feel like blocks of ice from the cold, and at the same time, my stomach is rumbling from extreme hunger."

Firas is a student in Gaza who works hard to support his family, including his two disabled parents. He has always dreamed about becoming a computer programmer and he is devastated that the war has prevented him from studying what he loves. Two years ago, he was an avid computer science and math student, earning a certificate in front-end web development. Now, he and his family are struggling to survive. Their tent was destroyed in the storm and they now have no shelter from the rain or the cold.

Here is a photo of Firas next to another of the storm's effect on his tent:`,
  youtube_channel: {
    src: e_data_citizen.none
  },
  youtube_profile: {
    src: e_data_citizen.none,
    type: e_data_citizen.none
  },
  image: "https://d3k9p5zq72yv95.cloudfront.net/files/spotfundfile/8F9pPRq3QKypd22JCMQUdA.jpeg?width=650&format=webp",
  links: [
    { name: e_data_citizen.spot_fund, url: "https://www.spotfund.com/story/da334739-c9ab-4008-a0da-8174561d5509?value=gaza" }
  ]
};
const gaza_family_emergency_relief = {
  name: data_profile$v.name,
  youtube_profile: data_profile$v.youtube_profile,
  youtube_channel: data_profile$v.youtube_channel,
  links: data_profile$v.links,
  image: data_profile$v.image,
  story: data_profile$v.story
};

const data_profile$u = {
  name: "Give Hope to My Family",
  story: `I have lost over 20 close and distant relatives, and those of us remaining are living in a tent along with a great danger. Save us from the storm! 
This channel is our cry for help. Please donate whatever you can! 
PayPal email: jop.oppeth@gmail.com`,
  youtube_channel: {
    src: "https://www.youtube.com/@GazaFamilyHope"
  },
  youtube_profile: {
    src: "https://youtu.be/iIj3UJ6x1I4",
    type: e_data_citizen.yt_long
  },
  image: "https://yt3.googleusercontent.com/HTCfHfZwmtqz8jUKm9TJAMJ5NLZMMWsAbdddTS8HKoHYnf-9vDh_Gni0Q6FU2hQu6HEjMMRuag=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.go_fund_me, url: "https://www.gofundme.com/f/help-mira-to-start-carrer-in-music?attribution_id=sl:64cff4d8-d67e-4949-ab9a-5354798ba3a9&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link" },
    { name: e_data_citizen.go_get_funding, url: "https://gogetfunding.com/help-me-support-my-family-and-children/" }
  ]
};
const give_hope_to_my_family = {
  name: data_profile$u.name,
  youtube_profile: data_profile$u.youtube_profile,
  youtube_channel: data_profile$u.youtube_channel,
  links: data_profile$u.links,
  image: data_profile$u.image,
  story: data_profile$u.story
};

const data_profile$t = {
  name: "givers gain",
  story: `\u{1F499} Givers Gain | Together, We Rise
        We\u2019re here to help those who need it most \u2014 one meal, one child, one act of kindness at a time. From feeding starving kids in Gaza to supporting people in crisis worldwide, we use every donation, every view, and every voice to make a difference.
        \u{1F3A5} Real stories. Real people. Real impact.
        \u2764\uFE0F Be part of the mission.
        \u{1F30D} Give hope. Share love. Save lives.
        \u{1F64F} Support our cause: https://ko-fi.com/giversgain"
`,
  youtube_channel: {
    src: "www.youtube.com/@TheGiversgain"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/IBEq4vxU4xg",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/uBoEYIO8yKY31_tDnVpjcmvfEX6t_YZkZQSnE_ZzuB8EWXGuhDXdtJtPGVqWCKEXi9z7atj5JQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.ko_fi, url: "https://ko-fi.com/giversgain" }
  ]
};
const givers_gain = {
  name: data_profile$t.name,
  youtube_profile: data_profile$t.youtube_profile,
  youtube_channel: data_profile$t.youtube_channel,
  links: data_profile$t.links,
  image: data_profile$t.image,
  story: data_profile$t.story
};

const data_profile$s = {
  name: "Hamsa Family",
  story: "My name is Hamsa, living in Gaza with my family. We are 5 people struggling to survive. Please help us with donations. Every support means so much. Thank you\u{1F494}\u{1F1F5}\u{1F1F8}\u{1F349}",
  youtube_channel: {
    src: "https://www.youtube.com/@Hamsa.Family/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/WXZZAoym2Xo",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/mYJjiOIjb9bzsJDcIePso6Eid90DKp_wny-cG-NNa1kIdtiPl5AugXtDWEq7KcIcQ0zLGTSoNA=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.chuffed, url: "https://chuffed.org/project/helphamsafamilytosurviveingaza" }
  ]
};
const hamsa_family = {
  name: data_profile$s.name,
  youtube_profile: data_profile$s.youtube_profile,
  youtube_channel: data_profile$s.youtube_channel,
  links: data_profile$s.links,
  image: data_profile$s.image,
  story: data_profile$s.story
};

const data_profile$r = {
  name: "haneen",
  story: "I am Haneen from Gaza. Here, I share with you the details of our lives that news screens do not broadcast. Amidst the rubble and the tents, I convey stories of resilience and the search for life in its simplest details. My channel is your window to see Gaza through my eyes.To support our resilience and help me continue providing and developing this content, you can contribute via the link below or contact me on WhatsApp at the following number:+972599616037",
  youtube_channel: {
    src: "https://www.youtube.com/@AnaHaneenGaza"
  },
  youtube_profile: {
    src: "https://www.youtube.com/watch?v=FceNFZXAavE",
    type: e_data_citizen.yt_long
  },
  image: "https://yt3.googleusercontent.com/tQP__Nflmflf6attvKsoMA2pd-n6LYf5IK1RbHXObj2vrR71sNt9YPy8cOu1ruSA3c-3PfKr5eg=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.usdt_binance, url: "https://docs.google.com/document/d/1udZWSh7KE03-BLmR7QFP0BTymFvOe1lTPIl67UAJMLQ/edit?tab=t.0" },
    { name: e_data_citizen.linkedin, url: "https://www.linkedin.com/in/haneen-sabah-822a6320b/" },
    { name: e_data_citizen.instagram, url: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbllDTmVTU3ViNzFDZlZvNWpySGxrWnFjVEJ3UXxBQ3Jtc0ttZENHWXVWTElseVVoTkVPU0lXZ0ljb0Rxb2M0QnotcmplVzhUWE4tem4xRmJka2lOeUtwdlBqaVlOeWxzdXdrZGtxVUZTU2t3aG85VTRKNHZhbG5aSEwtNjFYdzJTbFVITFRiQUdRTzNRLVhrT0hGTQ&q=https%3A%2F%2Fwww.instagram.com%2Fhaneenemsb" },
    { name: e_data_citizen.chuffed, url: "https://chuffed.org/project/183373-from-displaced-to-home" }
  ]
};
const haneen = {
  name: data_profile$r.name,
  youtube_profile: data_profile$r.youtube_profile,
  youtube_channel: data_profile$r.youtube_channel,
  links: data_profile$r.links,
  image: data_profile$r.image,
  story: data_profile$r.story
};

const data_profile$q = {
  name: "hearts for family in gaza",
  story: `Please kindly donate any amount you can to help me feed my children via the fundraising link below \u2B07\uFE0F`,
  youtube_channel: {
    src: "https://www.youtube.com/@HeartsForFamilyInGaza/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/KNrQgq386AU",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/oEzuJEiun_9X5-ibypyBOFak-V2Goi72ghCEdqJJOrwAUn7yh4Xyc9uFk1D37dsIyrEy74nOXI0=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate/?hosted_button_id=L78EYXKDUJ2Q6" }
  ]
};
const hearts_for_family_in_gaza = {
  name: data_profile$q.name,
  youtube_profile: data_profile$q.youtube_profile,
  youtube_channel: data_profile$q.youtube_channel,
  links: data_profile$q.links,
  image: data_profile$q.image,
  story: data_profile$q.story
};

const data_profile$p = {
  name: "help nurse hamza in gaza",
  story: "I live next to death \u{1F1F5}\u{1F1F8}\u{1F349}lost our home \u{1F62D}\u{1F62D}",
  youtube_channel: {
    src: e_data_citizen.none
  },
  youtube_profile: {
    src: e_data_citizen.none,
    type: e_data_citizen.none
  },
  image: "https://yt3.googleusercontent.com/zcI7QBhcrL-IRuoDB-O05Riv4DYxVIAszec2QvHmFP4T3MnowrH0cG-bzn8AEYCHcqWX4Z2cvw=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate/?hosted_button_id=ZV3XL6M2UPPQU" },
    { name: e_data_citizen.donorbox, url: "https://donorbox.org/tooth-surgery-for-nurse-hamza" }
  ]
};
const help_nurse_hamza_in_gaza = {
  name: data_profile$p.name,
  youtube_profile: data_profile$p.youtube_profile,
  youtube_channel: data_profile$p.youtube_channel,
  links: data_profile$p.links,
  image: data_profile$p.image,
  story: data_profile$p.story
};

const data_profile$o = {
  name: "helping_our_families_in_gaza",
  story: "\u2B07\uFE0F Even in the darkest moments in Gaza, your kindness can be a light \u{1F4A1} \u{1F64F} \u{1F6A8}DONATION \u2B07\uFE0F\u{1F1E6}\u{1F1EA}means a lot to help people in Gaza please \u{1F64F} ",
  youtube_channel: {
    src: "https://www.youtube.com/@Famili-j9g/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/slGsjB6Yi4E",
    type: "yt_short"
  },
  image: "https://yt3.googleusercontent.com/H7clrjQS3qVHfzH-FEIMwSw4MB5S1oozXt0kmwqQ4-1LNmj6o189rzSmmgcUCDE6D6BsiQuQZQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?hosted_button_id=AZFG48ETFJ99E" }
  ]
};
const helping_our_families_in_gaza = {
  name: data_profile$o.name,
  youtube_profile: data_profile$o.youtube_profile,
  youtube_channel: data_profile$o.youtube_channel,
  links: data_profile$o.links,
  image: data_profile$o.image,
  story: data_profile$o.story
};

const data_profile$n = {
  name: "Hope For Gaza Family ",
  story: "Family from ghaza Having no food No medicine no water no food I need you help to save my family Donations links are below",
  youtube_channel: {
    src: "https://www.youtube.com/@Manzafamilyfromghaza/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/Ld78jDJqOao",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/tAT0zDbS1i5zxOaTphLlxDF2pCFWgYlRDJzGYA0FvukqhMGkGwyiTtF_znT_fiYMEXVGfMt4o98=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/pools/c/9ptmPmbjIV" }
  ]
};
const hope_for_gaza_family = {
  name: data_profile$n.name,
  youtube_profile: data_profile$n.youtube_profile,
  youtube_channel: data_profile$n.youtube_channel,
  links: data_profile$n.links,
  image: data_profile$n.image,
  story: data_profile$n.story
};

const data_profile$m = {
  name: "hope for gaza people",
  story: "We are poor families living in the same area in Gaza, before the war, our life was simple but peaceful. We had a home, a routine, and dreams just like everyone else. But this war has taken everything away from us. Our house is gone, our belongings are destroyed, and our source of livelihood has disappeared.Today, we are struggling just to survive. Access to basic needs like food, clean water, and medical care has become extremely difficult. Children cry out of hunger, and the elderly suffer without proper treatment. Every day is a battle of fear and hope-hope that we make it through another night. I hope that help reaches us before it is too late.",
  youtube_channel: {
    src: "https://www.youtube.com/@hopeforgazapeople-u3c/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/xVTmVFBdH34",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/-cqk_vaGpjhpzX2u0RbTWaY8D1p0y8-ecdXR2uc4yBRx5GU5j3E5R-x7FkBpqYO8L9_gX8DKhQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?campaign_id=M4U4AWCXD5UUU" }
  ]
};
const hope_for_gaza_people = {
  name: data_profile$m.name,
  youtube_profile: data_profile$m.youtube_profile,
  youtube_channel: data_profile$m.youtube_channel,
  links: data_profile$m.links,
  image: data_profile$m.image,
  story: data_profile$m.story
};

const data_profile$l = {
  name: "hope gaza 11",
  story: "SAVE ME AND MY 35 FAMILY MEMBERS FROM HUNGER HELP US TO GET FOOD AND CLEAN WATER \u{1F4A6} WE ARE STARVING HERE IN THE WAR Donation link PLEASE \u{1F97A} DONATE ",
  youtube_channel: {
    src: "https://www.youtube.com/@hopegaza11/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/sRaV1IvyXHk",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/tXC_-Dk1SkqqxbXqwExCFyD_Gipvlm3TdTRYjHOihuYKb0p--weltk7cvHD09D-4Sw_b7MQphw=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.donorbox, url: "https://donorbox.org/save-me-and-my-35-family-members-to-get-food-water-sleeping-in-tent-save-us-become-our-savior-939888" }
  ]
};
const hope_gaza_11 = {
  name: data_profile$l.name,
  youtube_profile: data_profile$l.youtube_profile,
  youtube_channel: data_profile$l.youtube_channel,
  links: data_profile$l.links,
  image: data_profile$l.image,
  story: data_profile$l.story
};

const data_profile$k = {
  name: "Hossam's family Gaza",
  story: "This is the donation link, I hope you can help me  \u{1F64F}\u{1F64F}\u{1F1EF}\u{1F1F4}\u{1F46A} food",
  youtube_channel: {
    src: e_data_citizen.none
  },
  youtube_profile: {
    src: e_data_citizen.none,
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/7RLV1yi88RalpdAhBd2FsDzaoHwQ243-wggjdZGHjpRZkUXkxZzdxRbKsH4xCWhRvV7s7fwCWA=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?hosted_button_id=YUNLPRWJQV7XG" }
  ]
};
const hossam_family_gaza = {
  name: data_profile$k.name,
  youtube_profile: data_profile$k.youtube_profile,
  youtube_channel: data_profile$k.youtube_channel,
  links: data_profile$k.links,
  image: data_profile$k.image,
  story: data_profile$k.story
};

const data_profile$j = {
  name: "ibrahim waleed family",
  story: "Protect us from being starved",
  youtube_channel: {
    src: "https://www.youtube.com/@ibrahim_waleed.g/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/UdbG6M2P9yI",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/-qc_O3znIZ9OH4M-Mzbf_5BxTyfF-HDR4Home-0eauglyNbXHrktam4Bmyo0cf8inIPq-MezSg=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?campaign_id=PV45NNEDAH8GA" }
  ]
};
const ibrahim_waleed_family = {
  name: data_profile$j.name,
  youtube_profile: data_profile$j.youtube_profile,
  youtube_channel: data_profile$j.youtube_channel,
  links: data_profile$j.links,
  image: data_profile$j.image,
  story: data_profile$j.story
};

const data_profile$i = {
  name: "Kamala .family ",
  story: "You are kind person who can consider donating any amount to save my life and family to get food and medical \u{1F3E5} \u2B07\uFE0FDONATE \u2B07\uFE0F\u{1F64F}\u{1F1F5}\u{1F1F8}\u{1F1F5}\u{1F1F8}\u{1F1F5}\u{1F1F8}\u{1F352}\u{1F352}\u{1F34E}\u{1F349}\u{1F347}\u{1F345}\u{1F350}\u{1F34B}\u200D\u{1F7E9}\u{1F348}",
  youtube_channel: {
    src: "https://www.youtube.com/@Kamala.family/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/2nbuU1A6Hho",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/gQn-rgcJrUpfb0U98AyUmlRqeWdtKY91EnqPUIpd6RXl73TJCLAuPzWx6WrUp66rxK-YHPiNnGE=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?hosted_button_id=AZFG48ETFJ99E" }
  ]
};
const kamala_family = {
  name: data_profile$i.name,
  youtube_profile: data_profile$i.youtube_profile,
  youtube_channel: data_profile$i.youtube_channel,
  links: data_profile$i.links,
  image: data_profile$i.image,
  story: data_profile$i.story
};

const data_profile$h = {
  name: "layan gaza",
  story: "This is a humble request for help. My family is struggling, and your kindness through Chuffed can give us hope.",
  youtube_channel: {
    src: "https://www.youtube.com/@LayanGaza-e5f/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/IE-WzqBx12o",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/gsFUyN4wILWarxwx--_Sl8Dl_qG8A6enElgwli2JK1T4bzRVtBZSI5KFu1yEFioWP6l2eWNaOzY=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.artwork, url: "https://www.supportmyart.shop/products/support-me-by-purchasing-this-artwork-%E2%9D%A4%EF%B8%8F?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASGQ8JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafujouJDYk2KPHXZWcBpUSzJTV7Mhfycxjg7XoKvh8nxaS-bAigHDpE3mhGbQ_aem_0viKLuMF0HXRcVml8esfGA&variant=53201068130632" }
  ]
};
const layan_gaza = {
  name: data_profile$h.name,
  youtube_profile: data_profile$h.youtube_profile,
  youtube_channel: data_profile$h.youtube_channel,
  links: data_profile$h.links,
  image: data_profile$h.image,
  story: data_profile$h.story
};

const data_profile$g = {
  image: "picture.jpg",
  links: [
    { name: "link", url: "" }
  ],
  name: "mahira",
  story: "she struggle for her life in gaza and feed her children",
  youtube_channel: {
    src: ""
  },
  youtube_profile: {
    src: "",
    type: ""
  }
};
const mahira = {
  name: data_profile$g.name,
  youtube_profile: data_profile$g.youtube_profile,
  youtube_channel: data_profile$g.youtube_channel,
  links: data_profile$g.links,
  image: data_profile$g.image,
  story: data_profile$g.story
};

const data_profile$f = {
  name: "Mahmoud family",
  story: "POV: you\u2019re kind soul who rewatched 3x to help me buy food for my children in Gaza ",
  youtube_channel: {
    src: "https://www.youtube.com/@Save_Mahmoud_Family"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/XOrN5LAn_Yw",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/cLdEjD0Bb4aW_y1EfRk-62m_3zjzsG5uvDmQthRwYDEZ6Y_3J5K60kZlhspivB_raQWG1g3BtA=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?campaign_id=SLNAVPN76EDRQ" }
  ]
};
const mahmoud = {
  name: data_profile$f.name,
  youtube_profile: data_profile$f.youtube_profile,
  youtube_channel: data_profile$f.youtube_channel,
  links: data_profile$f.links,
  image: data_profile$f.image,
  story: data_profile$f.story
};

const data_profile$e = {
  name: "matw_project",
  story: `MATW Project is a global humanitarian organisation dedicated to supporting communities facing poverty, conflict, and displacement.

Guided by the values of compassion, Sadaqah, and Zakat, our work is rooted in the Islamic responsibility to care for those in need and serve the Ummah with sincerity.

Across more than 30 countries, MATW delivers essential support including food, clean water, orphan care, medical assistance, and long term development projects. From emergency response in crisis zones to sustainable initiatives like water wells and education, the focus is simple. Reach people in need with dignity, consistency, and accountability.

Join a global community committed to serving the Ummah and fulfilling a trust given by Allah.`,
  youtube_channel: {
    src: "https://www.youtube.com/@MATWProject/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/fRfRRf4m-lo",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/ju9DPkCTzmnYWJNQVHOui8fvv01D1xrdmDJfvNFJtclysnt8M_VVBhe_oSCgvg0gg0DExD8PrQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.website, url: "http://www.matwproject.org/" },
    { name: e_data_citizen.facebook, url: "https://www.facebook.com/matwproject" },
    { name: e_data_citizen.instagram, url: "https://www.instagram.com/matw_project" },
    { name: e_data_citizen.tiktok, url: "https://www.tiktok.com/@matw_project" },
    { name: e_data_citizen.link_tree, url: "linktr.ee/MATWProject" },
    { name: e_data_citizen.app, url: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbWp0UWJfdzQxcFBjY2d2RXliQ0ZIdlkxUEtJd3xBQ3Jtc0tuM3pWM0Q1aTNTeFU3bFhjUVRPX1Y3dTRlUkwweWpzOW5PVlBURGhTMTRJakFlcFdtRm5VN3JyMTZhLXphc2lwUXJIOFppSHJ6NW5sTFRnQjcxSk1ic01CQ1l4ZDhpeGhMajFoc19JQUdZU005RlZDZw&q=https%3A%2F%2Fonelink.to%2Fxq5p5w" }
  ]
};
const matw_project = {
  name: data_profile$e.name,
  youtube_profile: data_profile$e.youtube_profile,
  youtube_channel: data_profile$e.youtube_channel,
  links: data_profile$e.links,
  image: data_profile$e.image,
  story: data_profile$e.story
};

const data_profile$d = {
  name: "Mohamed amazeh ",
  story: "please help my family here Donation link, inshallah,Allah bless you all \u{1F64F}\u{1F517}\u{1F447}\u{1F447}\u{1F349}\u{1F1F5}\u{1F1F8}",
  youtube_channel: {
    src: "https://www.youtube.com/@Mohamed.amazeh"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/qYqX7jGckTc",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/sToI1oOS59z6jnZhxfp-I6gUFGMfEi9-0VfFCOKrWHMzqw0Y4h8IuJzCy5XkIL3BJndEGkvQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate/?hosted_button_id=32VNRBUA45WXL" }
  ]
};
const mohamed_amazeh = {
  name: data_profile$d.name,
  youtube_profile: data_profile$d.youtube_profile,
  youtube_channel: data_profile$d.youtube_channel,
  links: data_profile$d.links,
  image: data_profile$d.image,
  story: data_profile$d.story
};

const data_profile$c = {
  name: "Mohamed family",
  story: `I'm Mohammed in Gaza\u{1F62D}\u{1F62D}\u{1F494}\u{1F1F8}\u{1F1E9}wasup \u200E\u2068\u202A+971 55 147 9458\u202C\u2069`,
  youtube_channel: {
    src: "https://www.youtube.com/@SaveLife-u4w/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/watch?v=WVHuxRToh5c",
    type: e_data_citizen.yt_long
  },
  image: "https://yt3.googleusercontent.com/UaA0OpuZpfDk0lUp0958olX9mwTAmRdXimLq7y-sVne2mCXvDrYK4Z2UhKaZGr6rEVCUeAbpGA=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/paypalme/JoMalik569" },
    { name: e_data_citizen.spot_fund, url: "https://www.spotfund.com/story/8d955f35-d2e9-4f62-b02b-e459f078e195?source=s&share_location=c&r=aHR0cHM6Ly93d3cueW91dHViZS5jb20v&SFID=rzqs1cmsc&referral_id=45c1a8aa-9501-40c9-847c-3b84a309d6f7" }
  ]
};
const mohamed_family = {
  name: data_profile$c.name,
  youtube_profile: data_profile$c.youtube_profile,
  youtube_channel: data_profile$c.youtube_channel,
  links: data_profile$c.links,
  image: data_profile$c.image,
  story: data_profile$c.story
};

const data_profile$b = {
  name: "muryam from gaza",
  story: `My family and I are living through unimaginable hardship in Gaza. We struggle every day to find enough food to eat and basic necessities to survive. Clean water, medicine, and even simple daily essentials are scarce.
Watching my loved ones suffer from hunger and lack of resources breaks my heart. Every day is a battle just to stay alive, and we fear what tomorrow will bring.
I am asking for your support to help provide food, clean water, and essential supplies for my family. Any donation, no matter the size, will make a real difference and give us hope in this crisis.
Please help us survive and regain even a small sense of safety and dignity. Your kindness can save lives`,
  youtube_channel: {
    src: "https://www.youtube.com/@muryam.fromgaza/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/37FFaMyJ_2k",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/mTBKoUZEAOAuGnXef3Iig-kWWxT9DMu8IaHWr0ZRRu72VoXBe3hM5VYrH44UnfGLHXcT3l1PDA=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?campaign_id=ZJZCCYX4BDMB4" }
  ]
};
const muryam_from_gaza = {
  name: data_profile$b.name,
  youtube_profile: data_profile$b.youtube_profile,
  youtube_channel: data_profile$b.youtube_channel,
  links: data_profile$b.links,
  image: data_profile$b.image,
  story: data_profile$b.story
};

const data_profile$a = {
  name: "my chance | Shafic Bwanika",
  story: `Please donate to save my life and get treatment \u{1F64F}\u{1F64F}\u{1F349}\u{1F349}\u{1F447}\u{1F447}`,
  youtube_channel: {
    src: "https://www.youtube.com/@Mycance/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/QWg0jsQtdLg",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/DUex8bFy32TG6bHLfKfb9Bjfyb-mPS5Xl_yOt9C-xAlirLQR-zYUgkvqzwzR7imyxefB_TGPRg=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate/?hosted_button_id=VPBJRA7K763B8" }
  ]
};
const my_chance = {
  name: data_profile$a.name,
  youtube_profile: data_profile$a.youtube_profile,
  youtube_channel: data_profile$a.youtube_channel,
  links: data_profile$a.links,
  image: data_profile$a.image,
  story: data_profile$a.story
};

const data_profile$9 = {
  name: "nadin-gaza-family",
  story: "\u{1F494} We are running out of time\u2026 Gaza peoples are  dying. Please, please help us by donating $20, $50, $70. Your kindness can save there life. Link in bio, please share our story. \u{1F447}",
  youtube_channel: {
    src: "https://www.youtube.com/@nadin-gaza-family"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/SEDEte04raE",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/c6AUah_9JfiFn_zaBullw2C1QR8Doe1DHe_-RJcUI4kh3r1iikY8oKe7mm_ZNa6Qx2_aTwGjog=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.spot_fund, url: "https://www.spotfund.com/story/04a52948-8833-483f-99d5-fe6e2075643a?SFID=FamilyAya&r=aHR0cHM6Ly93d3cueW91dHViZS5jb20v" }
  ]
};
const nadin_gaza_family = {
  name: data_profile$9.name,
  youtube_profile: data_profile$9.youtube_profile,
  youtube_channel: data_profile$9.youtube_channel,
  links: data_profile$9.links,
  image: data_profile$9.image,
  story: data_profile$9.story
};

const data_profile$8 = {
  name: "Omar family ",
  story: "I am reaching out for daily support to help me manage my basic needs and keep moving forward. Even a small contribution makes a real difference and helps me get through each day with stability and hope. If you are able to help, your support would mean a lot.Donate by Chuffed \u{1F447} ",
  youtube_channel: {
    src: "https://www.youtube.com/@Omarfamily-y1o"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/epG5jIcJoFc",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/YP3FDuwQS8tBTjnNXi077LyI9-lib1lnIo-oa5zHOX7qfUnjP4jUmrS_svGXMMkwSxuTzHR5lg=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.artwork, url: "https://www.supportmyart.shop/products/support-me-by-purchasing-this-artwork-%E2%9D%A4%EF%B8%8F?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASGQ8JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafujouJDYk2KPHXZWcBpUSzJTV7Mhfycxjg7XoKvh8nxaS-bAigHDpE3mhGbQ_aem_0viKLuMF0HXRcVml8esfGA&variant=53201068130632" }
  ]
};
const omar_family = {
  name: data_profile$8.name,
  youtube_profile: data_profile$8.youtube_profile,
  youtube_channel: data_profile$8.youtube_channel,
  links: data_profile$8.links,
  image: data_profile$8.image,
  story: data_profile$8.story
};

const data_profile$7 = {
  name: "radwan and his family",
  story: `Hello, I am Radwan. I have 5 children. My wife died. I hope you can help me. I just want to feed my children. I don't have a job. I live in Gaza \u{1F979}`,
  youtube_channel: {
    src: "https://www.youtube.com/@radwan_his_family1/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/Gjqn6FljNkE",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/E16HxzkGQUfoOMPQiRz0l8QoSvHtZz9R8MPzskOKvd6p7Pv-yTAhqC3x-rdUhIO-3mllRxEbG7M=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.chuffed, url: "https://chuffed.org/project/172670-help-me-save-my-family" }
  ]
};
const radwan_and_his_family = {
  name: data_profile$7.name,
  youtube_profile: data_profile$7.youtube_profile,
  youtube_channel: data_profile$7.youtube_channel,
  links: data_profile$7.links,
  image: data_profile$7.image,
  story: data_profile$7.story
};

const data_profile$6 = {
  name: "saad from gaza",
  story: "Our kids don\u2019t dream of toys anymore \u2014they dream of food, peace, and tomorrow.Please help us give them that chance. \u{1F54A}\uFE0F",
  youtube_channel: {
    src: "http://www.youtube.com/@Saadfromgaza-l6t"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/0RKOW9aCXWo",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/8z9J4tuImr-wSWJe0UpFMbneXDAcb1eFib7S2b7VckkuhFVcqR4HYZh0hBDq-4kQODxhYfPsKg=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.donorbox, url: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa1hlbGV4ZWpCQXFPSUZOUmU5VDBzQjhwQ0Exd3xBQ3Jtc0tuSll4anU2Si1ZQUxRR3ZlTkVOZ0dId1QwbzhNZG5JakFkb21MbHd1Y2M4VlFKdWxvN3R2S09SUW1pS2RKRTZrdkI5b1BWdU1aZFZJX1hpOUtMdUs2cG5SS1F3dkdrV01SZHd6S0szN1ZySjhiY0dGbw&q=https%3A%2F%2Fdonorbox.org%2Fplease-stand-with-us" }
  ]
};
const saad_from_gaza = {
  name: data_profile$6.name,
  youtube_profile: data_profile$6.youtube_profile,
  youtube_channel: data_profile$6.youtube_channel,
  links: data_profile$6.links,
  image: data_profile$6.image,
  story: data_profile$6.story
};

const data_profile$5 = {
  name: "Sahar family",
  story: "Hello my name is Sahar. I am a mother of Five from Gaza\u{1F1F5}\u{1F1F8}. We live in a tent and there is not enough food, water, or medicine. Please donate through the link to help my family survive. Thank you for your support.\u{1F64F}\u{1F349}",
  youtube_channel: {
    src: "https://www.youtube.com/@Sahar_from_gaza"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/Esce_I5o6W0",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/xfFENT483SfN70GWmYuTZVGVS4zVCuiOegxeIOT_k81PRoqs5i3ufxI116rLRveY2hs0k3xxoQ=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.go_fund_me, url: "https://www.gofundme.com/f/help-the-orubs-family-rebuild-their-home?attribution_id=sl:16f2135c-670a-4465-a00e-3e5ce4017353&lang=en_GB&ts=1779715093&utm_campaign=fp_sharesheet&utm_content=amp20_t1&utm_medium=customer&utm_source=copy_link" }
  ]
};
const sahar = {
  name: data_profile$5.name,
  youtube_profile: data_profile$5.youtube_profile,
  youtube_channel: data_profile$5.youtube_channel,
  links: data_profile$5.links,
  image: data_profile$5.image,
  story: data_profile$5.story
};

const data_profile$4 = {
  image: "https://yt3.googleusercontent.com/cKdX3j2rupgTQUq9jZb5zShUx9cNYGhgvTiMIV_Y2UtVi2eVFDtCC_DFzvqVPtGdPBOp2HVp=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: "spotfund", url: "https://www.spotfund.com/story/c6bde3f6-11b4-4658-90f0-aac7efba7322?source=s&share_location=c&SFID=x5v4hh3sc&referral_id=7633caf0-9085-4703-a46a-13faaefdb4ce" }
  ],
  name: "Samer Palest ",
  story: "\u{1F1F5}\u{1F1F8} Samer Palest & Mahmood Naseral, Voices from Gaza We are two brothers living through the unimaginable in Gaza. Once, our home was full of laughter,it\u2019s filled with struggle and survival. Through our videos, we show the truth,  the pain, the hope, and the strength of our people.We don\u2019t share this for pity, but for awareness, humanity, and help. Every view, share, and prayer means the world to us. Together, we can keep Gaza\u2019s voice alive.\u{1F54A}\uFE0F Stand with Gaza. Stand Humanity #Gaza #Palestine #SamerPalest #MahmoodNaseral ",
  youtube_channel: {
    src: "https://www.youtube.com/@samerpalest1-u2l/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/9zGmp8PPfLc",
    type: "yt_short"
  }
};
const SamerPalest = {
  name: data_profile$4.name,
  youtube_profile: data_profile$4.youtube_profile,
  youtube_channel: data_profile$4.youtube_channel,
  links: data_profile$4.links,
  image: data_profile$4.image,
  story: data_profile$4.story
};

const data_profile$3 = {
  name: "sana aljamal",
  story: `Urgent Humanitarian Appeal
The young girl, Hanaa Al-Awady, is battling cancer, a disease that has robbed her of her childhood and caused her to lose her vision completely. Her health condition is rapidly deteriorating as the tumor continues to spread in her head and face.
Hanaa is no longer able to eat or drink normally due to the progression of the disease, forcing her family to perform surgery to insert a feeding tube into her stomach. However, the ongoing closure of the crossings and delays in her medical referral for treatment abroad pose a direct threat to her life, as there is a serious risk of the tumor blocking her airway.
Her mother appeals to the World Health Organization, Doctors Without Borders, and all relevant authorities to urgently intervene to save her daughter\u2019s life and facilitate her travel abroad for the necessary treatment before it is too late. \u{1F4CC} Family contact 
+972567256765`,
  youtube_channel: {
    src: e_data_citizen.none
  },
  youtube_profile: {
    src: e_data_citizen.none,
    type: e_data_citizen.none
  },
  image: e_data_citizen.none,
  links: [
    { name: e_data_citizen.instagram, url: "https://www.instagram.com/reel/DEwdUT9Oxqb/?igsh=MWtvenFpbmwxOGlvdw%3D%3D&utm_source=Pinterest&utm_medium=organic&epik=dj0yJnU9VWtleXl6Z2E3ZlhRY1JrUlRDZ2E2dTlGak5kVjd6YTAmcD0wJm49WWs0MWs1SUlWMHZXZ3VCbUpaeXpBQSZ0PUFBQUFBR29qbmkw" }
  ]
};
const sana_aljamal = {
  name: data_profile$3.name,
  youtube_profile: data_profile$3.youtube_profile,
  youtube_channel: data_profile$3.youtube_channel,
  links: data_profile$3.links,
  image: data_profile$3.image,
  story: data_profile$3.story
};

const data_profile$2 = {
  name: "Save my family",
  story: "Every child in Gaza deserves food, freedom, and a future. I use my voice to speak for those who are unheard.",
  youtube_channel: {
    src: "https://www.youtube.com/@SaveGaza-x3m/shorts"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/7Mdv-TZkFTM",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/ytc/AIdro_mbdw79JGc5mlEFb4L_fDS_eNfnZ3cB5TODqlDQLt_5YWQ-7_FLklstw7UB2tMe0YfK6w=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "paypal.com/donate?hosted_button_id=QTF497FNWUS2U" }
  ]
};
const save_my_family = {
  name: data_profile$2.name,
  youtube_profile: data_profile$2.youtube_profile,
  youtube_channel: data_profile$2.youtube_channel,
  links: data_profile$2.links,
  image: data_profile$2.image,
  story: data_profile$2.story
};

const data_profile$1 = {
  name: "save my family in Gaza",
  story: "Ispeak with a humanitarian spirit. Please do not ignore my message as some people did before. Help my family get food and flour. The situation is getting worse day after day. Your donation means saving my family. Donate even $50. The donation link is in my bio.\u{1F91A}\u{1F62D}\u{1F64F}\u{1F349}\u{1F97A}\u{1F494}",
  youtube_channel: {
    src: e_data_citizen.none
  },
  youtube_profile: {
    src: e_data_citizen.none,
    type: e_data_citizen.none
  },
  image: "https://yt3.googleusercontent.com/4M21BJPjBP9Suzf-T64etV550RhIca7CAfTDeisZHtPoIPJuNcLhfGulPFoiJNpK0CQu55W1g-w=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.paypal, url: "https://www.paypal.com/donate?hosted_button_id=FZLWEUU64R5N8" }
  ]
};
const save_my_family_in_gaza = {
  name: data_profile$1.name,
  youtube_profile: data_profile$1.youtube_profile,
  youtube_channel: data_profile$1.youtube_channel,
  links: data_profile$1.links,
  image: data_profile$1.image,
  story: data_profile$1.story
};

const data_profile = {
  name: "seran palestine",
  story: "Help me save my family \u{1F1F5}\u{1F1F8}\u{1F1F5}\u{1F1F8}\u{1F349}\u{1F349}\u{1F494}",
  youtube_channel: {
    src: "https://www.youtube.com/@Seran_Palestine"
  },
  youtube_profile: {
    src: "https://www.youtube.com/shorts/bQ3mKqSNA-M",
    type: e_data_citizen.yt_short
  },
  image: "https://yt3.googleusercontent.com/fnG7c3oHG9Kht5NOdHlRkF6v_xBd1A7NJACvn8Q0AdgxrNNIAXNQymgqoBd0FjFzhRf3twp-RpA=s160-c-k-c0x00ffffff-no-rj",
  links: [
    { name: e_data_citizen.none, url: e_data_citizen.none }
  ]
};
const seran_palestine = {
  name: data_profile.name,
  youtube_profile: data_profile.youtube_profile,
  youtube_channel: data_profile.youtube_channel,
  links: data_profile.links,
  image: data_profile.image,
  story: data_profile.story
};

const donation_palestine_data_citizen = [
  mahira,
  abdullah_zakaria,
  for_humanity,
  SamerPalest,
  helping_our_families_in_gaza,
  kamala_family,
  hope_gaza_11,
  save_my_family,
  hope_for_gaza_people,
  haneen,
  ibrahim_waleed_family,
  help_nurse_hamza_in_gaza,
  layan_gaza,
  hamsa_family,
  hossam_family_gaza,
  omar_family,
  seran_palestine,
  nadin_gaza_family,
  sahar,
  mahmoud,
  alhanaril_gaza_community_outreach,
  mohamed_amazeh,
  save_my_family_in_gaza,
  hope_for_gaza_family,
  amir_housni,
  saad_from_gaza,
  givers_gain,
  matw_project,
  my_chance,
  change_life_in_gaza,
  gaza_care,
  hearts_for_family_in_gaza,
  radwan_and_his_family,
  muryam_from_gaza,
  mohamed_family,
  gaza_family_emergency_relief,
  abdul_karim,
  give_hope_to_my_family,
  sana_aljamal
];

const country_id = "palestine";
const formated_data = donation_palestine_data_citizen.reduce((acc, val, idx) => {
  acc[idx] = {
    ...val,
    country_name: country_id
  };
  return acc;
}, []);
const data_country = {
  [country_id]: {
    persons: {
      datas: formated_data
    }
  }
};
const palestine = data_country;

const donation_data_global_raw = {
  countries: {
    ...palestine
  }
};
let id_global_counter = 0;
const donation_data_global = Object.entries(donation_data_global_raw.countries).reduce((acc, [key, val], idx) => {
  const formated_data = val.persons.datas.map((val2) => {
    id_global_counter++;
    return {
      id: id_global_counter,
      ...val2
    };
  });
  acc["countries"][key] = {
    persons: {
      datas: [
        ...formated_data
      ]
    }
  };
  return acc;
}, { countries: {} });

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value);
class DonationDatabase extends DonationDatabaseAbstract {
  constructor() {
    super();
    __publicField$4(this, "data", { ...donation_data_global });
    __publicField$4(this, "getData", () => {
      return this.data;
    });
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
class DonationModel extends DonationModelAbstract {
  constructor() {
    super(...arguments);
    __publicField$3(this, "tabel_name", "donation");
    __publicField$3(this, "database", new DonationDatabase());
    __publicField$3(this, "donation_util", Donation_api);
    __publicField$3(this, "getData", () => this.database.getData());
    __publicField$3(this, "findAll", () => {
      return this.database.getData();
    });
    __publicField$3(this, "findAllValueSkipId", ({ query }) => {
      const data = this.database.getData();
      const data_person = [];
      Object.values(data.countries).forEach((country_data) => {
        Object.values(country_data.persons.datas).forEach((person_data) => {
          const validate_search = Universal_api_util.deep_search({ value: person_data, query, skiping_field: ["id"] });
          if (validate_search) {
            data_person.push(person_data);
          }
        });
      });
      const grouped_data = this.donation_util.group_by({ datas: data_person, group_by: "country_name" });
      return this.donation_util.reformat_mass_country({
        country_Data: grouped_data
      });
    });
    /**
     * @desc to find data based on object given data object by developer
     * @param param 
     */
    __publicField$3(this, "findBy", ({ param, logic = "and" }) => {
      const params = param;
      const search_values = [];
      for (const [key, value] of Object.entries(params)) {
        search_values.push({ k: key, v: value });
      }
      const result_datas = [];
      const datas = this.database.getData();
      Object.values(datas.countries).forEach((data_country) => {
        data_country.persons.datas.forEach((person_Data) => {
          const search_logic = Universal_api_util.deep_search2({ data: person_Data, queries: search_values, logic, skiping_field: [] });
          if (search_logic) {
            result_datas.push(person_Data);
          }
        });
      });
      const grouped_data = this.donation_util.group_by({ group_by: "country_name", datas: result_datas });
      return this.donation_util.reformat_mass_country({
        country_Data: grouped_data
      });
    });
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
class DonationRepository extends DonationRepositoryAbstract {
  constructor() {
    super();
    //todo komunikasi antara model dan controller
    //todo: kode untuk validasi status code message dll
    __publicField$2(this, "model", new DonationModel());
    __publicField$2(this, "donation_apis", Donation_api);
    __publicField$2(this, "tabel_name", "donation");
    __publicField$2(this, "getData", () => {
      const datas = Object.values(this.model.getData().countries).map((val) => {
        const data_return = {};
        Object.values(val.persons.datas).map((person) => {
          Object.entries(person).forEach(([key, person2]) => {
            data_return[key] = person2;
          });
        });
        return data_return;
      });
      const sintaks = this.donation_apis.sql_syntaxs({ data: datas, query: "select id,name from donation groupBy(country_name)", tabel_name: this.tabel_name });
      return { countries: { persons: { persons: { datas: sintaks } } } };
    });
    __publicField$2(this, "findAll", () => {
      throw new Error("Method not implemented.");
    });
    __publicField$2(this, "findAllValueSkipId", (params) => {
      throw new Error("Method not implemented.");
    });
    __publicField$2(this, "findBy", (params) => {
      throw new Error("Method not implemented.");
    });
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
class DonationService extends DonationServiceAbstract {
  constructor() {
    super();
    __publicField$1(this, "donation_util", Donation_api);
    __publicField$1(this, "model", new DonationModel());
    __publicField$1(this, "repository", new DonationRepository());
    __publicField$1(this, "FitureQSearchCountry", ({ cb_response, id, data_models, q_params_datas, country }) => {
      this.QSearchCountry({
        cb_response({ data_models: data_models2, message_response, status_code_response, success_response }) {
          cb_response({
            data_models: data_models2,
            message_response,
            status_code_response,
            success_response
          });
        },
        country,
        data_models,
        id,
        model_find: this.model,
        q_params_datas
      });
    });
    __publicField$1(this, "FitureQSearch", ({ q_params_datas, data_models, cb_response }) => {
      this.QSearch({
        cb_response({ data_models: data_models2, message_response, status_code_response, success_response }) {
          cb_response({ data_models: data_models2, message_response, status_code_response, success_response });
        },
        data_models,
        model_find: this.model,
        q_params_datas
      });
    });
    __publicField$1(this, "Index", ({
      status,
      q_params,
      response_cb
    }) => {
      let query = "";
      let status_code = e_status_code.SuccessCode;
      let datas = this.model.findAll();
      let message = e_status_code.SuccessMessage;
      let success = true;
      const data_q_param = q_params;
      this.FitureQSearch({ cb_response({ message_response, status_code_response, success_response, data_models }) {
        status_code = status_code_response;
        success = success_response;
        message = message_response;
        datas = data_models;
      }, data_models: datas, q_params_datas: data_q_param });
      if ((data_q_param == null ? void 0 : data_q_param.q_search_country) !== void 0) {
        query = data_q_param == null ? void 0 : data_q_param.q_search_country;
        datas = this.model.findBy({ param: { country_name: query } });
        if (Object.values(datas.countries).length === 0) {
          Universal_api_util.responses({ cb({ message_response, status_code_response, success_response }) {
            success = success_response;
            message = message_response;
            status_code = status_code_response;
          }, code: 404 });
        }
      }
      status({ status_number: status_code });
      response_cb({
        datas,
        message,
        status: status_code,
        success
      });
    });
    __publicField$1(this, "Show", ({
      status,
      q_params,
      response_cb,
      country,
      id
    }) => {
      let status_code = e_status_code.SuccessCode;
      let message = e_status_code.SuccessMessage;
      let success = true;
      let datas = this.model.findBy({ param: { id, country_name: country } });
      const q_params_datas = q_params;
      this.FitureQSearchCountry({
        cb_response({ data_models, message_response, status_code_response, success_response }) {
          datas = data_models;
          success = success_response;
          message = message_response;
          status_code = status_code_response;
        },
        data_models: datas,
        country,
        q_params_datas,
        id
      });
      status({ status_number: status_code });
      response_cb({
        datas,
        message,
        status: status_code,
        success
      });
    });
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class DonationController extends DonationControllerAbstract {
  constructor() {
    super();
    //todo di controller masukkan ke repository lalu repository kkomunikasi dengan model 
    __publicField(this, "service", new DonationService());
    __publicField(this, "donation_util", Donation_api);
    __publicField(this, "Index", ({
      status,
      q_params
    }) => {
      let res_datas = { countries: {} }, res_message = "", res_status_code = 200, res_success = true;
      this.service.Index({
        response_cb({ datas, message, status: status2, success }) {
          res_datas = datas;
          res_message = message, res_status_code = status2, res_success = success;
        },
        status({ status_number }) {
          status({ status_number });
        },
        q_params
      });
      const data_paginate = this.donation_util.paginate({ data_per_page_count: 5, datas: res_datas });
      const response = this.donation_util.format({
        success: res_success,
        message: res_message,
        status: res_status_code,
        data: data_paginate
      });
      return response;
    });
    __publicField(this, "Show", ({
      status,
      id,
      country
    }) => {
      let res_datas = [], res_message = "", res_status_code = 200, res_success = true;
      this.service.Show({
        id,
        country,
        response_cb({ datas, message, status: status2, success }) {
          res_datas = datas;
          res_message = message, res_status_code = status2, res_success = success;
        },
        status({ status_number }) {
          status({ status_number });
        }
      });
      const response = this.donation_util.format({
        success: res_success,
        message: res_message,
        status: res_status_code,
        data: res_datas
      });
      return response;
    });
  }
}

export { DonationController as D };
//# sourceMappingURL=donation.controller.mjs.map
