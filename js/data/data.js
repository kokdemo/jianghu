/**
 * Created by kokdemo on 2016/1/20.
 */
var jianghuInfo = {
    prestige: [
        {num: 0, level: '无名小虾'},
        {num: 10, level: '义气少年'},
        {num: 1000, level: '新进侠客'},
        {num: 100000, level: '一方大侠'},
        {num: 10000000, level: '一代宗师'}
    ],
    martial: [
        {
            name: '嵩山少林寺',
            describe: '后魏孝文帝时期，达摩大师在嵩山面壁9年，终成少林武术，之后这间古刹的风雨，就不为人所知了。',
            force: 1000,
            money: {
                deposit: 10000,
                income: 0
            },
            prestige: 1500,
            levelInfo: [
                {
                    name: '沙弥',
                    force: 5,
                    cost: 15
                },
                {
                    name: '罗汉堂弟子',
                    force: 20,
                    cost: 100
                },
                {
                    name: '般若堂弟子',
                    force: 100,
                    cost: 600
                },
                {
                    name: '达摩院执事',
                    force: 600,
                    cost: 4000
                },
                {
                    name: '戒律院首座',
                    force: 4200,
                    cost: 30000
                },
                {
                    name: '少林寺方丈',
                    force: 8000,
                    cost: 35000
                }
            ],
            kongfu: {
                '沙弥': [
                    {
                        name: '少林长拳',
                        type: 'force',
                        describe: '少林基础入门的拳术，更注重强身健体',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    },
                    {
                        name: '少林佛法',
                        type: 'mind',
                        describe: "'要以佛法化解武功中的戾气'--不愿意留下姓名的高僧慧能这么说道",
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    }
                ],
                '罗汉堂弟子':[
                    {
                        name: '罗汉拳',
                        type: 'force',
                        describe: '少林著名拳法，以大开大合，刚强无匹著称',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    },
                    {
                        name: '少林心法',
                        type: 'mind',
                        describe: '少林寺基础的内功心法',
                        stage: [1, 0.6, 0.1, 0.05, 0],
                        base: 10,
                        proficiency: 0
                    }
                ]
            },
            work: {
                '沙弥': [
                    {
                        name: '挑水',
                        probability: 0.4,
                        print: '你认真的挑了一个月的水，感觉自己更健壮了。',
                        effect: function(){
                            jianghu.calc({body: 1,time: 1})
                        }
                    },
                    {
                        name: '打柴',
                        probability: 0.8,
                        print: '你认真的打了一个月的柴（哪有那么多柴……），感觉自己更健壮了。',
                        effect: function(){
                            jianghu.calc({body: 1,time: 1})
                        }
                    },
                    {
                        name: '打扫藏经阁',
                        probability: 1,
                        print: '你认真的打扫藏经阁，无意当中读了不少佛经。',
                        effect: function(){
                            jianghu.calc({mind: 1,time: 1,kongfu:{name:'少林佛法',num:2}})
                        }
                    }
                ]
            }
        }
    ]
};
