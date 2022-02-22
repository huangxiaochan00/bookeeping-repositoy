// import Tag from './components/Tag.vue';
type RecordItem = {
    tag: string;
    note: string;
    type: string;
    amount: number;
    createAt?: Date;
};

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
interface Window {
    tagList: Tag[];
    createTag: () => void;
    updateTag: (id: string, name: string) => string;
    removeTag: (id: string) => boolean;
    findTag: (id: string) => Tag | undefined

}