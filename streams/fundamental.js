//     Stream de Leitura--
//     process.stdin
//    .pipe(process.stdout)


//     Criando Stream de Leitura
import { Readable, Writable, Transform } from 'node:stream'

// Stream: ( metodo de leitura )Criando dados de 1 ate 100
class OneToHundredStream extends Readable{
    index = 1
    
    _read(){
    const i = this.index++

    setTimeout(() => {
        if(i > 100){
            this.push(null)
        }else {
            const buf = Buffer.from(String(i))
            this.push(buf)
        }
    }, 1000)
}
}

// Stream:  ( metodo de escrita )Multiplicando dados por 10
class MultiplyByTenStream extends Writable{
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

// Stream: Transformando numero ( invertendo sinal )
class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())



