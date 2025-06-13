
export class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number, next: ListNode | null = null) {
    this.data = data;
    this.next = next;
  }
}
