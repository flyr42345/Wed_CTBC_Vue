console.log("測試")

// 建立Vue應用程式
const app = Vue.createApp({
    // 資料區域
    data() {
        // 資料物件
        return {
            // 第一個文字:值
            firstText: "嗨，這裡是 Vue 的資料!",
            textColor:"red",
            fontSize:24,
            canBuy:false,
            web: [
                "HTML","CSS","Javascript","jQuery","Vue","React","Angular","Git"
            ],
            count:0,
            pointX:0, pointY:0,
            inputText:"預設文字",
            toDoList:[],addToDo:""
        }
    },
    // 方法區(函式)
    methods:{
        // 方法名稱() {}
        test(){
            console.log("我是測試方法");
        },
        methodEvent(e){
            console.log(e);
            console.log(e.target);
            console.log(e.x,e.y);
        },
        getPoint(e){
            this.pointX = e.x;
            this.pointY = e.y;
        },
        addToDoList(){
            // 將addToDo添加到toDoList陣列內
            this.toDoList.push(this.addToDo);
        }
    }
});

// 將app變數安裝到#app元素
app.mount("#app");