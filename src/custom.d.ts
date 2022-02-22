// import Tag from './components/Tag.vue';
type RecordItem = {
    tag: string;
    note: string;
    type: string;
    amount: number;
    createAt?: Date;
};

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
interface Window {
    tagList: Tag[]
}