'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    /**
     * addAction
     * 
     * @returns 
     */
    addAction() {
        //auto render template file index_index.html
        // this.model('member').getList().then(function(data) {
        //     // data = 123;

        // }).then(function(data) {
        //     console.log(data);
        // })

        return this.display();
    }

    /**
     * uploadFileAction
     * 
     */
    uploadAction() {
        let file = this.file();
        let fileName = file.file.originalFilename
        return fileName;
        console.log(file);
    }

    doaddAction() {
        let formData = this.post();
        console.log(formData);
    }
}