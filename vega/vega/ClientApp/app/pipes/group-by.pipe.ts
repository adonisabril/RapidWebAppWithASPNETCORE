﻿// ======================================
// Author: Adonis Villanueva
// Email:  thedynamiclight@gmail.com
// Copyright (c) 2017 www.alwayswanderlust.com
// 
// ==> Inquiries: thedynamiclight@gmail.com
// ======================================

import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {

    transform(value: Array<any>, field: string): Array<any> {

        if (!value)
            return value;

        const groupedObj = value.reduce((prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }

            return prev;
        }, {});

        return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
    }
}