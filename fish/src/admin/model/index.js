'use strict';
/**
 * model
 */
export default class extends think.model.base {
    async getList() {
        //获取 user 模型实例
        let instance = this.model('user');
        let list = await instance.select();
        let ids = list.map(item => {
            return item.id;
        });
        let data = await this.where({ id: ['IN', ids] }).select();
        return data;
    }
}