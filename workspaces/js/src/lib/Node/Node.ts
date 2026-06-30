

export interface Node<T = number> {
  data: T
}

export  class ListNode<T = number> implements Node<T> {

  constructor(
    public data:T,
    public next: ListNode<T> | null = null,
    public prev: ListNode<T> | null = null
  ) {
  }
}
