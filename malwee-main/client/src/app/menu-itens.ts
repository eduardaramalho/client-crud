import { GroupComponent } from "./group/group.component";
import { UserComponent } from "./user/user.component";
import { SubgroupComponent } from "./subgroup/subgroup.component";

export const MenuItens = [
    {
        path: 'user',
        caption : 'Usuário',
        icon : 'person',
        component: UserComponent,
    },
    {
        path: 'group',
        caption : 'Grupos',
        icon : 'assessment',
        component: GroupComponent,
    },
    {
        path: 'subgroup',
        caption : 'Subgrupo',
        icon : 'assignment',
        component: SubgroupComponent,
    }
]