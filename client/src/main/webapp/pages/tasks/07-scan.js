[{
/*
 * Karel
 * Copyright (C) 2014-2015 Jaroslav Tulach <jaroslav.tulach@apidesign.org>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 2 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. Look for COPYING file in the top folder.
 * If not, see http://opensource.org/licenses/GPL-2.0.
 */
    "description" : "DESC_07",
    "hint" : "HINT_07",
    "command" : "scan-town",
    "tests" : [
        {
            "description" : "Polož značku, když je políčko prázdné.",
            "start" : {"rows":[null,null,null,null,{"columns":[{"wall":true},null,null,null,null,null,{"exit":true},null,null,null]},null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,null,null,null,null,null,null,null]}]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        },
        {
            "description" : "Polož značku, když je políčko prázdné.",
            "start" : {"rows":[null,null,{"columns":[null,null,null,null,null,null,null,null,{"exit":true},null]},null,null,null,null,null,null,{"columns":[{"robot":1,"marks":0},null,null,null,null,null,null,null,null,null]}]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        },
        {
            "description" : "Polož značku, když je políčko prázdné.",
            "start" : {"rows":[null,null,null,null,null,null,{"columns":[null,null,null,null,{"exit":true},null,null,null,null,null]},null,null,{"columns":[{"robot":1,"marks":0},null,null,null,null,null,null,null,null,null]}]},
            "end" : {"rows":[null,null,null,null,null,null,null,{"columns":[null,null,null,{"robot":2,"marks":0},null,null,null,null,null,null]},null,null]}
        },
    ]
}]
