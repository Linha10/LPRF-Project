module.exports = {
    getCurrentUserw:()=>{
        return JSON.parse(localStorage.getItem("user"));
        // if(localStorage.getItem("user")){
        //     return JSON.parse(localStorage.getItem("user"));
        // }else if(document.cookie("user")){
        //     return JSON.parse(document.cookie("user"));
        // }
    }
}