<template>
  <div class="preferences-form">
    <div class="ms-preferences">
      <p></p>
      <el-form ref="pref" :model="preferences" label-width="120px" :rules="rules">
        <el-form-item label="个人信息" :model="preferences.userinfo">
          <el-row style="height: 50px;">
            <el-col :span="8">
              <el-form-item prop="score" label="分数">
                <el-input v-model="preferences.userinfo.score" laceholder="您的分数" class="score-input"
                          type="number" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="ranked" label="排名">
                <el-input v-model="preferences.userinfo.ranked" laceholder="您的排名" class="score-input"
                          type="number" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item style="height: 30px;"></el-form-item>
          <el-row>
            <el-col :span="8">
              <el-select v-model="preferences.userinfo.sub1" class="m-2" placeholder="选修科目1" size="small"
                         prop="sub1">
                <el-option
                    v-for="item in preferences.options"
                    :key="item.value"
                    :label="item.lable"
                    :value="item.value"
                    :disabled="(preferences.userinfo.sub2 == item.value)||(preferences.userinfo.sub3 ==
                    item.value)"
                />
              </el-select>

            </el-col>
            <el-col :span="8">
              <el-select v-model="preferences.userinfo.sub2" class="m-2" placeholder="选修科目2" size="small"
                         prop="sub2">
                <el-option
                    v-for="item in preferences.options"
                    :key="item.value"
                    :label="item.lable"
                    :value="item.value"
                    :disabled="(item.value == preferences.userinfo.sub1)||(item.value ==
                    preferences.userinfo.sub3)"
                />
              </el-select>
            </el-col>
            <el-col :span="8">
              <el-select v-model="preferences.userinfo.sub3" class="m-2" placeholder="选修科目3" size="small"
                         prop="sub3">
                <el-option
                    v-for="item in preferences.options"
                    :key="item.value"
                    :label="item.lable"
                    :value="item.value"
                    :disabled="(preferences.userinfo.sub2 == item.value)||
                    (preferences.userinfo.sub1 == item.value)"
                />
              </el-select>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="院校偏好" :model="preferences.schoolType">
          <el-form-item prop="universityType" label="院校类型">
            <el-checkbox-group v-model="schooltypes">
              <el-checkbox label="综合"></el-checkbox>
              <el-checkbox label="工科"></el-checkbox>
              <el-checkbox label="农科"></el-checkbox>
              <el-checkbox label="林科"></el-checkbox>
              <el-checkbox label="医药"></el-checkbox>
              <el-checkbox label="师范"></el-checkbox>
              <el-checkbox label="语言"></el-checkbox>
              <el-checkbox label="财经"></el-checkbox>
              <el-checkbox label="政法"></el-checkbox>
              <el-checkbox label="艺术"></el-checkbox>
              <el-checkbox label="体育"></el-checkbox>
              <el-checkbox label="民族"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item prop="universityLevel" label="院校级别">
            <el-checkbox v-model="preferences.schoolType.type985" label="985"></el-checkbox>
            <el-checkbox v-model="preferences.schoolType.type211" label="211"></el-checkbox>
            <el-checkbox v-model="preferences.schoolType.typeDfc" label="双一流"></el-checkbox>
          </el-form-item>
        </el-form-item>
        <el-form-item label="学科偏好" :model="preferences.major">
          <el-checkbox-group v-model="majortypes">
            <el-checkbox label="哲学"></el-checkbox>
            <el-checkbox label="经济学"></el-checkbox>
            <el-checkbox label="法学"></el-checkbox>
            <el-checkbox label="教育学"></el-checkbox>
            <el-checkbox label="文学"></el-checkbox>
            <el-checkbox label="历史学"></el-checkbox>
            <el-checkbox label="理学"></el-checkbox>
            <el-checkbox label="工学"></el-checkbox>
            <el-checkbox label="农学"></el-checkbox>
            <el-checkbox label="医学"></el-checkbox>
            <el-checkbox label="管理学"></el-checkbox>
            <el-checkbox label="艺术学"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="城市偏好">
          <el-checkbox-group v-model="citytypes">
            <el-checkbox label="一线城市"></el-checkbox>
            <el-checkbox label="新一线城市"></el-checkbox>
            <el-checkbox label="二线城市"></el-checkbox>
            <el-checkbox label="三线城市"></el-checkbox>
            <el-checkbox label="其他"></el-checkbox>
          </el-checkbox-group>
          <el-checkbox-group v-model="provinces">
            <el-checkbox label="北京市"></el-checkbox>
            <el-checkbox label="上海市"></el-checkbox>
            <el-checkbox label="天津市"></el-checkbox>
            <el-checkbox label="重庆市"></el-checkbox>
            <el-checkbox label="河北省"></el-checkbox>
            <el-checkbox label="山西省"></el-checkbox>
            <el-checkbox label="内蒙古自治区"></el-checkbox>
            <el-checkbox label="辽宁省"></el-checkbox>
            <el-checkbox label="吉林省"></el-checkbox>
            <el-checkbox label="黑龙江省"></el-checkbox>
            <el-checkbox label="江苏省"></el-checkbox>
            <el-checkbox label="浙江省"></el-checkbox>
            <el-checkbox label="安徽省"></el-checkbox>
            <el-checkbox label="福建省"></el-checkbox>
            <el-checkbox label="江西省"></el-checkbox>
            <el-checkbox label="山东省"></el-checkbox>
            <el-checkbox label="河南省"></el-checkbox>
            <el-checkbox label="湖北省"></el-checkbox>
            <el-checkbox label="湖南省"></el-checkbox>
            <el-checkbox label="广东省"></el-checkbox>
            <el-checkbox label="广西壮族自治区"></el-checkbox>
            <el-checkbox label="海南省"></el-checkbox>
            <el-checkbox label="四川省"></el-checkbox>
            <el-checkbox label="贵州省"></el-checkbox>
            <el-checkbox label="云南省"></el-checkbox>
            <el-checkbox label="西藏自治区"></el-checkbox>
            <el-checkbox label="陕西省"></el-checkbox>
            <el-checkbox label="甘肃省"></el-checkbox>
            <el-checkbox label="青海省"></el-checkbox>
            <el-checkbox label="宁夏回族自治区"></el-checkbox>
            <el-checkbox label="新疆维吾尔自治区"></el-checkbox>
            <el-checkbox label="台湾省"></el-checkbox>
            <el-checkbox label="香港特别行政区"></el-checkbox>
            <el-checkbox label="澳门特别行政区"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div class="submit-btn">
        <el-button type="primary" @click="submit()">提交</el-button>
      </div>
    </div>
  </div>

</template>

<script>

import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import request from "@/utils/request";
import {ElMessage} from "element-plus";
// import { ElMessage } from "element-plus";
// import {useStore} from "vuex"
// import request from "../utils/request.js";
export default {
  setup() {
    const router = useRouter();
    // const submitInformation = () => {
    //   router.push({
    //     name: "home",
    //   });
    // };
    const schooltypes = ref([]);
    const majortypes = ref([]);
    const citytypes = ref([]);
    const provinces = ref([]);

    const preferences = reactive({
      options: [
        {value: "物理", lable: "物理"},
        {value: "化学", lable: "化学"},
        {value: "生物", lable: "生物"},
        {value: "历史", lable: "历史"},
        {value: "地理", lable: "地理"},
        {value: "政治", lable: "政治"},
      ],
      userinfo: {
        score: '',
        ranked: '',
        sub1: '',
        sub2: '',
        sub3: '',
      },
      schoolType: {
        type211: false,
        type985: false,
        typeDfc: false,
        ptype: "",
      },
      major: {
        majors: ""
      },
      location: {
        cityType: "",
        provinces: "",
      }

    });
    const pref = ref(null);
    const rules = {
      // score: [{required: true, message: "请输入分数", trigger: "blur"}],
      // ranked: [{required: true, message: "请输入排名", trigger: "blur"}],
      // sub1: [{required: true, message: "请输入科目一", trigger: "blur"}],
      // sub2: [{required: true, message: "请输入科目二", trigger: "blur"}],
      // sub3: [{required: true, message: "请输入科目三", trigger: "blur"}]
    };

    const submit = () => {
      preferences.schoolType.ptype = "";
      for (let schoolTypekey in schooltypes.value) {
        preferences.schoolType.ptype += schooltypes.value.at(schoolTypekey) + " ";
      }
      console.log(preferences.schoolType.ptype);
      preferences.major.majors = "";
      for (let majorTypesKey in majortypes.value) {
        preferences.major.majors += majortypes.value.at(majorTypesKey) + " ";

      }
      preferences.location.cityType = "";
      for (let cityTypesKey in citytypes.value) {
        preferences.location.cityType += citytypes.value.at(cityTypesKey) + " ";
      }

      preferences.location.provinces = "";
      for (let provincesKey in provinces.value) {
        preferences.location.provinces += provinces.value.at(provincesKey) + " ";
      }


      pref.value.validate((valid) => {
        if (valid) {
          request
              .post("/preference/update", preferences)
              .then((res) => {
                console.log(res);
                // 存token setItem(key,value)
                if (res.success == true) {
                  //sessionStorage.setItem(token, res.data.token);
                  ElMessage.success("信息填写成功");
                  router.push("/collect");
                } else {
                  ElMessage.error({
                    message: '信息填写失败:' + res.message,
                  });
                }
              })
              .catch((err) => {
                ElMessage.error({
                  message: '服务器错误：' + err.statusText
                });
              });

        } else {
          ElMessage.error("有信息未填写！");
          return false;
        }
      })
    };
    return {
      preferences,
      rules,
      pref,
      schooltypes,
      majortypes,
      citytypes,
      provinces,
      submit,
    };
  },
}
</script>

<style scoped>
/* 组件的样式定义 */
.preferences-form {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../assets/image4.jpg);
  /*background-color: white;*/
  background-size: 100%;
  animation: slide-bottom 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.ms-preferences {
  position: absolute;
  left: 50%;
  top: 25%;
  width: 1000px;

  margin: -150px 0 0 -485px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 1);
  /*background-color: beige;*/
  overflow: hidden;
  animation: slide-bottom-up 0.5s cubic-bezier(.64, 1.4, .49, .96) both;
  animation-delay: 200ms;
}

.submit-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 8px;
}
</style>
