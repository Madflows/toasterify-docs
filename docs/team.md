<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/madflows.png',
    name: 'Folarin Lawal',
    title: 'Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/madflows' },
      { icon: 'twitter', link: 'https://twitter.com/madflows_' }
    ]
  },
]
</script>

# Our Team <Badge type="tip" text="Recent" />

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
