

export function changeData(newData){
    return {
        type: 'CHANGE_DATA',
        payload: newData,
    }
}