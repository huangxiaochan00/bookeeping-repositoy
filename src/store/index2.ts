import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

const store = {
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => {
        console.log('df');

        return recordListModel.create(record)
    },
    tagList: tagListModel.fetch(),
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0]
    },
    createTag: () => {
        const name = window.prompt("输出标签名");
        if (!name) {
            window.alert("标签名不能为空");
            return;
        } else {
            tagListModel.create(name);
        }
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name)
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id)
    }

}
export default store