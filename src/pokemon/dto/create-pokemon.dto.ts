import { IsInt, IsPositive, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    @IsInt()
    @MinLength(1)
    name: string;
}
