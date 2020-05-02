export class Item {
    constructor(private name : string, private price : number) {}

    public say (elem : HTMLElement | null) : void {
        if (elem) {
          elem.innerHTML = 'Signature: ' + this.name + ' cost: ' + this.price + 'yen';
        }
    }
}
