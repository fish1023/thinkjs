'use strict';
/**
 * model
 */
export default class extends think.model.base {
    async getList() {
        //获取 user 模型实例
        // let instance = this.model('user');
        // let list = await instance.select();
        // console.log(222222);
        // // let ids = list.map(item => {
        // //     console.log(item);
        // //     return item.id;
        // // });
        // let data = await this.select();
        // return data;
        console.log("I'm in");
        let instance = this.model('user');

        let aaa = await instance.find();
        console.log(aaa);
        aaa = aaa['id'];
        console.log(aaa);
        let aaaa = await instance.where({
            'id': aaa,
        }).select()
        console.log(aaaa);
    }
}