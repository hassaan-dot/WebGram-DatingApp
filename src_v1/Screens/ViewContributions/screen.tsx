import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  ListRenderItemInfo,
} from "react-native";
import { styles } from "./style";
import { string } from "../../Resources";
import { ContributionCard, SendAGiftCard } from "../../Components";
import { props } from "../../utils/props/send_gift/props";
import helpers from "../../utils/helpers";

interface SectionData {
  title: string;
  data: Array<any>; 
}

const Screen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SectionList
        style={{padding:helpers.normalize(20)}}
          showsVerticalScrollIndicator={false}
          sections={props as SectionData[]}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }: ListRenderItemInfo<any>) => (
            <SendAGiftCard {...item} />
          )}
          ListHeaderComponent={
            <>
              {" "}
              <View style={styles.header}>
                <Text style={styles.description}>
                  {string.view_contribution_desc_1}
                </Text>
              </View>
              <ContributionCard />
            </>
          }
          renderSectionHeader={({
            section: { title },
          }: {
            section: SectionData;
          }) => <Text style={styles.sectionHeader}>{title}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen;
