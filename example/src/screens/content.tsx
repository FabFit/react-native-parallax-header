import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Content({ title }: { title: string }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>{title}</Text>

      <View
        style={{ marginVertical: 30, height: 2, backgroundColor: 'gray' }}
      />
      <Text style={[styles.para, { fontWeight: '600' }]}>
        The following is from nathanberry.com/critic
      </Text>

      <Text style={styles.para}>
        Years ago I made an important choice: I will always be a creator, not a
        critic.
      </Text>

      <Text style={styles.para}>
        This may sound like the obvious choice, but in today’s culture we often
        reward the critic with just as much attention and fame. Far more than
        they deserve.
      </Text>

      <Text style={styles.para}>
        As more creators are daring to create, they often don’t meet the
        standards we think they should. Whether it’s a beginner whose skill
        doesn’t yet match their taste, or the professional who makes a misstep.
        There’s someone waiting to criticize.
      </Text>

      <Text style={styles.para}>
        That criticism gets attention. It’s usually witty, accurate, cutting,
        and possibly even deserved. But most of all, it’s unnecessary.
      </Text>

      <Text style={styles.para}>
        When a friend of ours was being attacked by Twitter mobs for a
        misinterpreted tweet, Ryan Delk said to me, “I decided years ago that I
        would always be on the side of the creator.”
      </Text>

      <Text style={styles.para}>
        That one line has stuck with me. I will always be on the side of the
        creator.
      </Text>

      <Text style={styles.para}>
        That means not mocking your product idea. Not complaining about bugs,
        typos, or poor design. But instead understanding that you dared to
        create and that should be encouraged. Especially if it isn’t yet to a
        high standard or your full potential.
      </Text>

      <Text style={styles.para}>
        Constructive criticism is important for growth. As creators we need to
        get better at opening that door for those who truly want to push us to
        be better, not just mock those who misstep.
      </Text>

      <Text style={styles.para}>
        Don’t be critic with an opinion on every new thing. Instead choose to be
        the creator, building the future.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  para: {
    marginBottom: 20,
  },
});
