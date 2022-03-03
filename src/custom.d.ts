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
    defaultTags: Tag[],
    currentTag?: Tag,
    currentType: '+' | '-'
}
type Tag = {
    id: string,
    name: string,
    icon?: "other" | string,
    type?: string
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => string
    save: () => void
    update: (id: string, name: string) => string
    remove: (id: string) => boolean
}
