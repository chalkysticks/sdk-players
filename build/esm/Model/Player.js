import { Model } from '@chalkysticks/sdk-core';
export class Player extends Model.Base {
    constructor() {
        super(...arguments);
        this.endpoint = 'player';
        this.fields = [
            'id',
            'name',
            'created_at',
            'updated_at',
        ];
    }
    getName() {
        return this.attr('name');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL01vZGVsL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPL0MsTUFBTSxPQUFPLE1BQU8sU0FBUSxLQUFLLENBQUMsSUFBSTtJQUF0Qzs7UUFPVyxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBTzVCLFdBQU0sR0FBYTtZQUN0QixJQUFJO1lBQ1YsTUFBTTtZQUNBLFlBQVk7WUFDWixZQUFZO1NBQ2YsQ0FBQztJQWNOLENBQUM7SUFOTyxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBVyxDQUFDO0lBQ3BDLENBQUM7Q0FJRCJ9