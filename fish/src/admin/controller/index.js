'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        // auto render template file index_index.html
        return this.display();
        // this.model('user').getList().then(function(data) {
        //     // data = 123;

        // }).then(function(data) {
        //     console.log(data);
        // })
        // console.log(1111);
        // this.model('user').getList()
    }
}