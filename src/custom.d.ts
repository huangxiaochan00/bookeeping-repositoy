// import Tag from './components/Tag.vue';
type RecordItem = {
    tag: string;
    note: string;
    type: string;
    amount: number;
    createAt?: string;
};
type MyState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}
type Tag = {
    id: string
    name: string
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => string
    save: () => void
    update: (id: string, name: string) => string
    remove: (id: string) => boolean
}
