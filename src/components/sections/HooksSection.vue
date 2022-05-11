<script>
    import ContentSection from "../formatting/ContentSection.vue";
    import ContentHighlight from "../formatting/ContentHighlight.vue";
    import ContentLink from "../formatting/ContentLink.vue";
    import CodeBlock from "../formatting/CodeBlock.vue";
    import CodeInline from "../formatting/CodeInline.vue";
    import Warning from "../formatting/Warning.vue";

    export default {
        components: {
            ContentSection,
            ContentHighlight,
            ContentLink,
            CodeBlock,
            CodeInline,
            Warning
        }
    };
</script>

<template>
    <h1 class="text-3xl font-bold mb-2">Hooks</h1>
    <p class="mb-4">YAWS runs hooks for you to use to listen to YAWS's events.</p>
    <p class="mb-4"><ContentHighlight>Important Note: </ContentHighlight>Not all hooks might be ran instantly as they happen, some of them go through a proxy function first to format the data to be the expected data structures. This shouldn't be a problem, but in case it is this warning is here to let you know :)</p>

    <ContentSection title="Player Warned" id="hooks-warned">
        <CodeInline>yaws.developers.warned</CodeInline>
        <h3 class="mt-4 text-xl">Description</h3>
        <p>Called whenever a warning is issued from the addon.</p>

        <h3 class="mt-4 text-xl">Parameters</h3>
        <ul class="list-disc list-inside">
            <li><ContentLink href="#data-warning" noRedir>Warning</ContentLink> data.</li>
        </ul>

        <h3 class="mt-4 text-xl">Returns</h3>
        <p>This hook doesn't allow for return overrides.</p>

        <h3 class="mt-4 text-xl">Example</h3>
        <p>Listens for every warn and prints a warning if it's Livaco.</p>
        <CodeBlock>
            hook.Add("yaws.developers.warned", "example.hook", function(warningData)
                if(warningData.playerSteamID != "STEAM_0:1:80376292") then return end 
                print("Livaco just got warned... again...")
                print("This time for " .. warningData.reason)
            end)
        </CodeBlock>
        <p>Output:</p>
        <img src="https://upload.livaco.dev/u/OhcGuq5KHZ.png">
        <p class="text-sm"><i>I don't actually put milk before cereal. Bowl -> Cereal -> Milk gang #normal #swaglife</i></p>
    </ContentSection>

    <ContentSection title="Warn Deleted" id="hooks-warnremoved">
        <CodeInline>yaws.developers.warnremoved</CodeInline>
        <h3 class="mt-4 text-xl">Description</h3>
        <p>Called when a warning is deleted. By this point the warning is already removed from the database, so data here is unfortunately limited and in a certain format you might not want.</p>

        <h3 class="mt-4 text-xl">Parameters</h3>
        <ul class="list-disc list-inside">
            <li>WarningID: (String/Warning ID) The UUID of the warning deleted.</li>
            <li>DeletingAdmin: (Entity/Player) The player entity of the person deleting the warning.</li>
            <li>Player: (String/SteamID64) The warned player's SteamID64.</li>
            <li>Admin: (String/SteamID64) The admin's SteamID64.</li>
            <li>Reason: (String) The reason for the warning.</li>
            <li>Points: (Number) The number of points given on the warning.</li>
        </ul>

        <h3 class="mt-4 text-xl">Returns</h3>
        <p>This hook doesn't allow for return overrides.</p>

        <h3 class="mt-4 text-xl">Example</h3>
        <p>Echo's every deleted warns ID, offender and admin who deleted it to the console.</p>
        <CodeBlock>
            hook.Add("yaws.developers.warnremoved", "example.hook", function(id, deletingAdmin, player, admin, reason, points)
                print(string.format("Warning %s for SteamID %s was deleted by %s.", id, player, deletingAdmin:Name()))
            end)
        </CodeBlock>
        <p>Output:</p>
        <img src="https://upload.livaco.dev/u/2CPSxRbkts.png">
    </ContentSection>
</template>