# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class LifecyclePolicy(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    Amazon Resource Name (ARN) of the DLM Lifecycle Policy.
    """
    description: pulumi.Output[str]
    """
    A description for the DLM lifecycle policy.
    """
    execution_role_arn: pulumi.Output[str]
    """
    The ARN of an IAM role that is able to be assumed by the DLM service.
    """
    policy_details: pulumi.Output[dict]
    """
    See the `policy_details` configuration block. Max of 1.
    
      * `resourceTypes` (`list`) - A list of resource types that should be targeted by the lifecycle policy. `VOLUME` is currently the only allowed value.
      * `schedules` (`list`) - See the `schedule` configuration block.
    
        * `copyTags` (`bool`) - Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
        * `createRule` (`dict`) - See the `create_rule` block. Max of 1 per schedule.
    
          * `interval` (`float`) - How often this lifecycle policy should be evaluated. `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values.
          * `intervalUnit` (`str`) - The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value.
          * `times` (`str`) - A list of times in 24 hour clock format that sets when the lifecycle policy should be evaluated. Max of 1.
    
        * `name` (`str`) - A name for the schedule.
        * `retainRule` (`dict`) - See the `retain_rule` block. Max of 1 per schedule.
    
          * `count` (`float`) - How many snapshots to keep. Must be an integer between 1 and 1000.
    
        * `tagsToAdd` (`dict`) - A mapping of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these.
    
      * `targetTags` (`dict`) - A mapping of tag keys and their values. Any resources that match the `resource_types` and are tagged with _any_ of these tags will be targeted.
    """
    state: pulumi.Output[str]
    """
    Whether the lifecycle policy should be enabled or disabled. `ENABLED` or `DISABLED` are valid values. Defaults to `ENABLED`.
    """
    tags: pulumi.Output[dict]
    """
    Key-value mapping of resource tags.
    """
    def __init__(__self__, resource_name, opts=None, description=None, execution_role_arn=None, policy_details=None, state=None, tags=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a [Data Lifecycle Manager (DLM) lifecycle policy](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html) for managing snapshots.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: A description for the DLM lifecycle policy.
        :param pulumi.Input[str] execution_role_arn: The ARN of an IAM role that is able to be assumed by the DLM service.
        :param pulumi.Input[dict] policy_details: See the `policy_details` configuration block. Max of 1.
        :param pulumi.Input[str] state: Whether the lifecycle policy should be enabled or disabled. `ENABLED` or `DISABLED` are valid values. Defaults to `ENABLED`.
        :param pulumi.Input[dict] tags: Key-value mapping of resource tags.
        
        The **policy_details** object supports the following:
        
          * `resourceTypes` (`pulumi.Input[list]`) - A list of resource types that should be targeted by the lifecycle policy. `VOLUME` is currently the only allowed value.
          * `schedules` (`pulumi.Input[list]`) - See the `schedule` configuration block.
        
            * `copyTags` (`pulumi.Input[bool]`) - Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
            * `createRule` (`pulumi.Input[dict]`) - See the `create_rule` block. Max of 1 per schedule.
        
              * `interval` (`pulumi.Input[float]`) - How often this lifecycle policy should be evaluated. `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values.
              * `intervalUnit` (`pulumi.Input[str]`) - The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value.
              * `times` (`pulumi.Input[str]`) - A list of times in 24 hour clock format that sets when the lifecycle policy should be evaluated. Max of 1.
        
            * `name` (`pulumi.Input[str]`) - A name for the schedule.
            * `retainRule` (`pulumi.Input[dict]`) - See the `retain_rule` block. Max of 1 per schedule.
        
              * `count` (`pulumi.Input[float]`) - How many snapshots to keep. Must be an integer between 1 and 1000.
        
            * `tagsToAdd` (`pulumi.Input[dict]`) - A mapping of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these.
        
          * `targetTags` (`pulumi.Input[dict]`) - A mapping of tag keys and their values. Any resources that match the `resource_types` and are tagged with _any_ of these tags will be targeted.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/dlm_lifecycle_policy.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if description is None:
                raise TypeError("Missing required property 'description'")
            __props__['description'] = description
            if execution_role_arn is None:
                raise TypeError("Missing required property 'execution_role_arn'")
            __props__['execution_role_arn'] = execution_role_arn
            if policy_details is None:
                raise TypeError("Missing required property 'policy_details'")
            __props__['policy_details'] = policy_details
            __props__['state'] = state
            __props__['tags'] = tags
            __props__['arn'] = None
        super(LifecyclePolicy, __self__).__init__(
            'aws:dlm/lifecyclePolicy:LifecyclePolicy',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, description=None, execution_role_arn=None, policy_details=None, state=None, tags=None):
        """
        Get an existing LifecyclePolicy resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: Amazon Resource Name (ARN) of the DLM Lifecycle Policy.
        :param pulumi.Input[str] description: A description for the DLM lifecycle policy.
        :param pulumi.Input[str] execution_role_arn: The ARN of an IAM role that is able to be assumed by the DLM service.
        :param pulumi.Input[dict] policy_details: See the `policy_details` configuration block. Max of 1.
        :param pulumi.Input[str] state: Whether the lifecycle policy should be enabled or disabled. `ENABLED` or `DISABLED` are valid values. Defaults to `ENABLED`.
        :param pulumi.Input[dict] tags: Key-value mapping of resource tags.
        
        The **policy_details** object supports the following:
        
          * `resourceTypes` (`pulumi.Input[list]`) - A list of resource types that should be targeted by the lifecycle policy. `VOLUME` is currently the only allowed value.
          * `schedules` (`pulumi.Input[list]`) - See the `schedule` configuration block.
        
            * `copyTags` (`pulumi.Input[bool]`) - Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
            * `createRule` (`pulumi.Input[dict]`) - See the `create_rule` block. Max of 1 per schedule.
        
              * `interval` (`pulumi.Input[float]`) - How often this lifecycle policy should be evaluated. `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values.
              * `intervalUnit` (`pulumi.Input[str]`) - The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value.
              * `times` (`pulumi.Input[str]`) - A list of times in 24 hour clock format that sets when the lifecycle policy should be evaluated. Max of 1.
        
            * `name` (`pulumi.Input[str]`) - A name for the schedule.
            * `retainRule` (`pulumi.Input[dict]`) - See the `retain_rule` block. Max of 1 per schedule.
        
              * `count` (`pulumi.Input[float]`) - How many snapshots to keep. Must be an integer between 1 and 1000.
        
            * `tagsToAdd` (`pulumi.Input[dict]`) - A mapping of tag keys and their values. DLM lifecycle policies will already tag the snapshot with the tags on the volume. This configuration adds extra tags on top of these.
        
          * `targetTags` (`pulumi.Input[dict]`) - A mapping of tag keys and their values. Any resources that match the `resource_types` and are tagged with _any_ of these tags will be targeted.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/dlm_lifecycle_policy.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["arn"] = arn
        __props__["description"] = description
        __props__["execution_role_arn"] = execution_role_arn
        __props__["policy_details"] = policy_details
        __props__["state"] = state
        __props__["tags"] = tags
        return LifecyclePolicy(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

