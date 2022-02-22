import createID from '../lib/createID';
type tag = {
    id: string
    name: string
}

type TagListModel = {
    data: tag[]
    fetch: () => tag[]
    create: (name: string) => string
    save: () => void
    update: (id: string, name: string) => string
    remove: (id: string) => string
}

const tagListModel: TagListModel = {
    data: [],
    fetch() {
        return this.data = JSON.parse(
            window.localStorage.getItem("tagList") || "[]")
    },
    create(name: string) {
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            alert("该标签已存在，不可重复创建！")
            return name
        }
        const id = createID().toString()
        this.data.push({ id, name: name })
        this.save()
        alert("创建成功！")
        return name
    },
    save() {
        window.localStorage.setItem("tagList", JSON.stringify(this.data));
    },
    update(id, name) {
        // console.log('d');

        const idList = this.data.map(t => t.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(t => t.name)
            if (names.indexOf(name) > 0) {
                alert("标签名重复了")
                return '标签名重复了'
            }
            else {
                const tag = this.data.filter(t => t.id === id)[0]
                tag.name = name
                this.save()
                return 'success'
            }
        }
        else {
            return 'not found'
        }



    },
    remove(id: string) {
        let index = -1
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break
            }
        }
        this.data.splice(index, 1)
        this.save()
        return 'success'
    }

}
export default tagListModel 