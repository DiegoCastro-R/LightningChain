const lightningHash = (data: string) => {
    return data + '*';
}

class Block {
    // Block data
    data: string;
    // Block Header
    hash: string;
    //Create link to the previous block
    lastHash: string;
    constructor(data: string, hash: string, lastHash: string) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

class Blockchain {
    // List of block on the chain
    chain: Block[];
    constructor() {
        const genesis = new Block('gen-data', 'gen-hash', 'gen-lastHash');
        this.chain = [genesis];
    }
    addBlock(data: string) {
        const lastHash = this.chain[this.chain.length - 1].hash;
        const hash = lightningHash(data + lastHash);
        const block = new Block(data, hash, lastHash);

        this.chain.push(block);
    }
}

const fooBlockChain = new Blockchain();

fooBlockChain.addBlock('one');
fooBlockChain.addBlock('two');
fooBlockChain.addBlock('three');

console.log(fooBlockChain)