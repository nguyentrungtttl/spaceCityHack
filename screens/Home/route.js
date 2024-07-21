import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Competitions from './Competitions';
import Education from './Education';
import ProjectRoute from './Projects/route';
import SkillRoute from './Skill/route';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator()

export default function Home(){
    return(
        <Tab.Navigator
        screenOptions={()=>({
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{backgroundColor:"#333333"},
        })}>
            <Tab.Screen component={Education} name='Education'          options={{
            tabBarIcon: ({ focused }) => (
              <Image style={{width:26,height:24}}
                source={
                  focused
                    ? require("../../assets/Education-light.png")
                    : require("../../assets/Education.png")
                }
              />
            ),
            tabBarItemStyle:{
                borderRightWidth:1,
                borderRightColor:"#fff",
                top:10
            }
          }}/>
            <Tab.Screen component={ProjectRoute} name='ProjectRoute'
            options={{
                tabBarIcon: ({ focused }) => (
                  <Image style={{width:24,height:24}}
                    source={
                      focused
                        ? require("../../assets/Projects-light.png")
                        : require("../../assets/Projects.png")
                    }
                  />
                ),
                tabBarItemStyle:{
                    borderRightWidth:1,
                    borderRightColor:"#fff",
                    top:10
                }
              }}/>
            <Tab.Screen component={Competitions} name='Competitions'
            options={{
                tabBarIcon: ({ focused }) => (
                  <Image style={{width:24,height:24}}
                    source={
                      focused
                        ? require("../../assets/Competitions-light.png")
                        : require("../../assets/Competitions.png")
                    }
                  />
                ),
                tabBarItemStyle:{
                    borderRightWidth:1,
                    borderRightColor:"#fff",
                    top:10
                }
              }}/>
            <Tab.Screen component={SkillRoute} name='Skill'
            options={{
                tabBarIcon: ({ focused }) => (
                  <Image style={{width:24,height:24,marginRight:10}}
                    source={
                      focused
                        ? require("../../assets/Skill-light.png")
                        : require("../../assets/Skill.png")
                    }
                  />
                ),
                tabBarItemStyle:{
                    top:10
                }
              }}/>
        </Tab.Navigator>
    )
}