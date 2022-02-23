import createID from "@/lib/createID";
// let data: Tag[] | undefined = undefined
const tagStore = {
    tagList: [] as Tag[],
    fetchTag() {
        return this.tagList = JSON.parse(
            window.localStorage.getItem("tagList") || "[]")
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0]
    },
    createTag() {
        const name = window.prompt("输出标签名");
        if (!name) {
            window.alert("标签名不能为空");
            return;
        } else {
            const names = this.tagList.map(item => item.name)
            if (names && names.indexOf(name) >= 0) {
                alert("该标签已存在，不可重复创建！")
                return '重复'
            }
            const id = createID().toString()
            this.tagList.push({ id, name: name })
            tagStore.saveTag()
            alert("创建成功！")
            return 'success'
        }
    },
    updateTag(id: string, name: string) {
        const idList = this.tagList.map(t => t.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(t => t.name)
            if (names.indexOf(name) > 0) {
                // alert("标签名重复了")
                return '标签名重复了'
            }
            else {
                const tag = tagStore.findTag(id)
                tag.name = name
                tagStore.saveTag()
                return 'success'

            }
        }
        else {
            return 'not found'
        }
    },
    removeTag(id: string) {
        let index = -1

        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break
            }
        }
        this.tagList.splice(index, 1)
        tagStore.saveTag()
        return true
    },
    saveTag() {
        window.localStorage.setItem("tagList", JSON.stringify(this.tagList));
    }

}

tagStore.fetchTag()
export default tagStore