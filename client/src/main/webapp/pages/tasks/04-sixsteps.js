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
    "description" : "DESC_04",
    "hint": "HINT_04",
    "command" : "six-steps",
    "solution" : '{"type":"karel_funkce","id":"a:9JCx:~*_85D|+vNqVS","fields":{"NAME":"six-steps"},"inputs":{"IFTRUE":{"block":{"type":"karel_repeat","id":"mF(dALmG$O#^5-i/OJ!E","fields":{"N":"6"},"inputs":{"IFTRUE":{"block":{"type":"karel_call","id":"GB}NvBM[}xgph1S=KvmM","fields":{"CALL":"STEP"}}}}}}}}',
    "tests" : [
        {
            "description" : "Šest kroků na sever.",
            "start" : {"rows":[null,{"columns":[null,null,null,{"exit":true},null,null,null,null,null,null]},null,null,null,null,null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null]},
            "end" : {"rows":[null,{"columns":[null,null,null,{"robot":4,"marks":0},null,null,null,null,null,null]},null,null,null,null,null,null,null,null]}
        }
    ]
}]
