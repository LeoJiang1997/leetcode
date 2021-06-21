var list = new LinkedList;

function LinkedList(){
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  this.head = null;
  this.length = 0;

//*增加节点
LinkedList.prototype.append = function(data: number){
  //创建一个新节点
  const newNode = this.linkedList().Node(data);
  //假如这是一个空链表
  if (this.length === 0){
    this.head = newNode;
  } else {
    //假如不是空链表，就在链表最后面添加
    let current = this.head;
    list.for.forNormal();
    current.next = newNode;
  }
  this.length++;
}

//* insert插入方法
LinkedList.prototype.insert = function (position, data) {
  //1、对position进行越界判断
  if (position < 0 || position > this.length) {
    return false
  }
  //2、根据data创建newNode
  let newNode = new Node(data)
  //3、判断插入的位置是否是第一个
  if (position === 0) {
    newNode.next = this.head
    this.head = newNode
  } else {
    let index = 0;
    let previous = null;
    let current = this.head;
    while (index < position) {
      index++
      previous = current
      current = current.next
    }
    newNode.next = current
    previous.next = newNode
  }
  //4、length ++
  this.length++
  return true
}

//*删除
LinkedList.prototype.delete = function(position){
  //*对数组越界进行判断
  if(position < 0 || position >= this.length){
    return false;
  }
  if (position === 0){
    this.head = this.head.next;
  }
  else {
    let index = 0;
    let current = this.head;
    let previous = null;
    while (index < position) {
      index++
      previous = current
      current = current.next
    }
    // 前一个节点的next指current的next即可
    previous.next = current.next
    current.next = null
    // 3、length - 1
    this.length--
    return true
  }
}

//*遍历
LinkedList.prototype.for = function(){
  //*创建一个新节点
  let curFor = this.head;
  //*正常遍历
  function forNormal(){
    while(curFor.next){
      curFor = curFor.next;
    }
  }
  //*递归遍历
  function recursion(cur){
    if(!cur.next) return null;
    if(cur.next) return recursion(cur); 
  }
}
}




