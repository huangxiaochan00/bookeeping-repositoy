// import x from '@/assets/icons/money.svg';

function createID() {
    let id: number = parseInt(window.localStorage.getItem('_id_Max') || '0')
    id++;
    window.localStorage.setItem('_id_Max', id.toString())
    return id
}

export default createID