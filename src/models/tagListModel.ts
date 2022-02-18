type tag = {
    id: string
    name: string
}

type TagListModel = {
    data: tag[]
    fetch: () => tag[]
    create: (name: string) => string
    save: () => void
}

const tagListModel: TagListModel = {
    data: [],
    fetch() {
        return JSON.parse(
            window.localStorage.getItem("tagList") || "[]")
    },
    create(name: string) {
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) > 0) {
            alert("该标签已存在，不可重复创建！")
            return name
        }
        this.data.push({ id: name, name: name })
        this.save()
        alert("创建成功！")
        return name
    },
    save() {
        window.localStorage.setItem("tagList", JSON.stringify(this.data));
    }

}
export default tagListModel 