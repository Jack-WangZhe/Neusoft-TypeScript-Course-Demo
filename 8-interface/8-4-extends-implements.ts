interface CommonEmployee {
    name: string;
    salary: number;
}
interface Manager extends CommonEmployee {
    employees: Employee[];
}

class KinglandEmployee implements CommonEmployee {
    name: string;
    salary= 10000;
}