export const initialBoardData = {
    items: {
        'item-1': {
            id: 'item-1',
            title: 'Title item 1',
            date: '12 jun 2019',
            user: 'T',
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"'
        },
        'item-2': {
            id: 'item-2',
            user: 'T',
            title: 'Title item 2',
            date: '12 jun 2019',
            content: 'Content of item 2.'
        },
        'item-3': {
            id: 'item-3',
            user: 'T',
            date: '12 jun 2019',
            title: 'Title item 3',
            content: 'Content of item 3.'
        },
        'item-4': {
            id: 'item-4',
            user: 'T',
            date: '12 jun 2019',
            title: 'Title item 4',
            content: 'Content of item 4.'
        },
        'item-5': {
            id: 'item-5',
            user: 'T',
            date: '12 jun 2019',
            title: 'Title item 5',
            content: 'Content of item 5.'
        },
        'item-6': {
            id: 'item-6',
            user: 'T',
            date: '12 jun 2019',
            title: 'Title item 6',
            content: 'Content of item 6.'
        },
        'item-7': {
            id: 'item-7',
            user: 'T',
            date: '12 jun 2019',
            title: 'Title item 7',
            content: 'Content of item 7.'
        }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            itemsIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            itemsIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Review',
            itemsIds: []
        },
        'column-4': {
            id: 'column-4',
            title: 'Done',
            itemsIds: []
        }
    },
    columnsOrder: ['column-1', 'column-2', 'column-3', 'column-4']
}

// export default initialBoardData;