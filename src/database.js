// { "users": [usurios...] }

export class database{
    database = {}

    select(table){
        const data = this.database[table] ?? []

        return data
    }

    insert(table, data){

    }
}