class Node{
    constructor(element, next = null){
        this.element = element
        this.next = next
    }
}

class PriorityNode extends Node{
    constructor(element, priority, next = null){
        super(element, next)
        this.priority = priority
    }
}

class Queue{
    constructor(){
        this.front = null
        this.tail = null
    }

    enqueue(element){
        const node = new Node(element)
        if(this.isEmpty()){
            this.front = null
            this.tail = null
        }else
            this.tail.next = node 
            this.tail = node
    }
    isEmpty(){
        return this.front === null
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const element = this.front.element
        if(this.size() === 1){
            this.tail = null
            this.front = null
        }else{
            this.front = this.front.next
        }
        return element
    }
    peek(){
        return this.isEmpty() === null? null: this.front.element
    }
    tail(){
        return this.isEmpty() === null? null: this.tail.element
    }
    size(){
        let temp = this.front
        let count = 0

        while(temp != null){
            temp = temp.next
            count ++
        }
        return count
    }
    print(){
        let temp = this.front
        while(temp != null){
            console.log(temp.element)
            temp = temp.next
        }
    }
}

class PriorityQueue extends Queue{
    enqueue(element, priority){
        const node = new PriorityNodeNode(element, priority)
        if(this.isEmpty()){
            this.front = node
            this.tail = node
            
        }else{
            let temp = this.front
            let prev = null

            while (temp !== null){
                if(temp.priority < node.priority){
                    prev = temp
                    temp = temp.next
                }else{
                    prev.next = node
                    node.next = temp
                    return
                }
            }
            this.tail.next = node
            this.tail = node
        }
    }
}
